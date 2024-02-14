import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { W3CTraceContextPropagator } from "@opentelemetry/core";

export const nodeSdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "server",
  }),
  textMapPropagator: new W3CTraceContextPropagator(),
  spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter()),
});
