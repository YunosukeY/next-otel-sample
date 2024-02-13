import {
  DiagConsoleLogger,
  DiagLogLevel,
  diag,
  metrics,
} from "@opentelemetry/api";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import {
  MeterProvider,
  PeriodicExportingMetricReader,
} from "@opentelemetry/sdk-metrics";

// Optional and only needed to see the internal diagnostic logging (during development)
// diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// サーバー側でも動作する（urlを変える？）
export const getMeterFor = (which: "web" | "node") => {
  const meterProvider = new MeterProvider();
  metrics.setGlobalMeterProvider(meterProvider);

  meterProvider.addMetricReader(
    new PeriodicExportingMetricReader({
      exporter: new OTLPMetricExporter({
        url:
          which === "web" ? "/api/metrics" : "http://localhost:4318/v1/metrics",
      }),
      exportIntervalMillis: 1000,
    })
  );

  return meterProvider.getMeter("example-exporter-collector");
};