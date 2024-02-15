import { ZoneContextManager } from "@opentelemetry/context-zone";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
import {
  BatchSpanProcessor,
  WebTracerProvider,
} from "@opentelemetry/sdk-trace-web";
import { W3CTraceContextPropagator } from "@opentelemetry/core";
import { trace } from "@opentelemetry/api";
import { webResource } from "./webResource";

const provider = new WebTracerProvider({ resource: webResource });
provider.addSpanProcessor(
  new BatchSpanProcessor(new OTLPTraceExporter({ url: "/api/trace" }))
);
provider.register({
  contextManager: new ZoneContextManager(),
  propagator: new W3CTraceContextPropagator(),
});
trace.setGlobalTracerProvider(provider);

registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation({
      clearTimingResources: true,
    }),
  ],
});

export const webTracer = trace.getTracer("app");
