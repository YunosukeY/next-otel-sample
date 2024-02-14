import { metrics } from "@opentelemetry/api";
import { MeterProvider } from "@opentelemetry/sdk-metrics";

export const shutdownMeterProvider = async () => {
  const meterProvider = metrics.getMeterProvider();

  // APIのMeterProviderはshutdownメソッドを持っていないので、SDKのMeterProviderかチェックする
  // See also https://github.com/open-telemetry/opentelemetry-specification/issues/1073
  if (meterProvider instanceof MeterProvider) {
    await meterProvider.shutdown();
    metrics.disable();
  }
};
