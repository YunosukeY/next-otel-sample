import { ZoneContextManager } from "@opentelemetry/context-zone";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
import { Resource, detectResourcesSync } from "@opentelemetry/resources";
import {
  BatchSpanProcessor,
  WebTracerProvider,
} from "@opentelemetry/sdk-trace-web";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { browserDetector } from "@opentelemetry/opentelemetry-browser-detector";
import { W3CTraceContextPropagator } from "@opentelemetry/core";

let resource = new Resource({
  [SemanticResourceAttributes.SERVICE_NAME]: "client",
});
const detectedResources = detectResourcesSync({
  detectors: [browserDetector],
});
resource = resource.merge(detectedResources);

const provider = new WebTracerProvider({ resource });
provider.addSpanProcessor(
  new BatchSpanProcessor(new OTLPTraceExporter({ url: "/api/trace" }))
);
provider.register({
  contextManager: new ZoneContextManager(),
  propagator: new W3CTraceContextPropagator(),
});

registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation({
      clearTimingResources: true,
    }),
  ],
});

export const webTracer = provider.getTracer("example-tracer-web");
