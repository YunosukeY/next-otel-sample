import { Resource, detectResourcesSync } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { browserDetector } from "@opentelemetry/opentelemetry-browser-detector";

const baseResource = new Resource({
  [SemanticResourceAttributes.SERVICE_NAME]: "client",
});
const detectedResources = detectResourcesSync({
  detectors: [browserDetector],
});
export const webResource = baseResource.merge(detectedResources);
