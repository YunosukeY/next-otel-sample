import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import {
  BatchLogRecordProcessor,
  ConsoleLogRecordExporter,
} from "@opentelemetry/sdk-logs";

export const nodeSdk = new NodeSDK({
  serviceName: "server",

  // config for TraceProvider
  spanProcessor: new BatchSpanProcessor(
    new OTLPTraceExporter({
      url: "http://localhost:4318/v1/traces",
    })
  ),

  // config for MeterProvider
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: "http://localhost:4318/v1/metrics",
    }),
    exportIntervalMillis: 1000,
  }),

  // config for LoggerProvider
  logRecordProcessor: new BatchLogRecordProcessor(
    new ConsoleLogRecordExporter()
  ),
});
