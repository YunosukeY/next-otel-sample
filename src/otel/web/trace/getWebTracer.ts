import { ZoneContextManager } from "@opentelemetry/context-zone";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
import { Resource, detectResourcesSync } from "@opentelemetry/resources";
import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
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
// Note: For production consider using the "BatchSpanProcessor" to reduce the number of requests
// to your exporter. Using the SimpleSpanProcessor here as it sends the spans immediately to the
// exporter without delay
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.addSpanProcessor(
  new SimpleSpanProcessor(new OTLPTraceExporter({ url: "/api/trace" }))
);
provider.register({
  contextManager: new ZoneContextManager(),
  propagator: new W3CTraceContextPropagator(),
});

registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation({
      ignoreUrls: [/localhost:8090\/sockjs-node/],
      propagateTraceHeaderCorsUrls: [
        "https://cors-test.appspot.com/test",
        "https://httpbin.org/get",
        "http://localhost:3000",
      ],
      clearTimingResources: true,
    }),
  ],
});

export const webTracer = provider.getTracer("example-tracer-web");
