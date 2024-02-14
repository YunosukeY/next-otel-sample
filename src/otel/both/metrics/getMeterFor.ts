import { metrics } from "@opentelemetry/api";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import {
  MeterProvider,
  PeriodicExportingMetricReader,
} from "@opentelemetry/sdk-metrics";

// サーバー側でも動作する（urlを変える？）
export const getMeterFor = (which: "web" | "node") => {
  const meterProvider = new MeterProvider({
    readers: [
      new PeriodicExportingMetricReader({
        exporter: new OTLPMetricExporter({
          url:
            which === "web"
              ? "/api/metrics"
              : "http://localhost:4318/v1/metrics",
        }),
        exportIntervalMillis: 1000,
      }),
    ],
  });
  metrics.setGlobalMeterProvider(meterProvider);

  return meterProvider.getMeter("example-exporter-collector");
};
