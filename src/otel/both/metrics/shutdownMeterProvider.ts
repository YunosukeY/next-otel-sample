import { metrics } from "@opentelemetry/api";

declare module "@opentelemetry/api" {
  interface MeterProvider {
    shutdown(): Promise<void>;
  }
}
export const shutdownMeterProvider = () => {
  metrics
    .getMeterProvider()
    .shutdown()
    .then(() => metrics.disable());
};
