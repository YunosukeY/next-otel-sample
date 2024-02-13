import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { B3Propagator } from "@opentelemetry/propagator-b3";

export const nodeSdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "server",
  }),
  textMapPropagator: new B3Propagator(),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
});
