import { metrics } from "@opentelemetry/api";

export const nodeMeter = metrics.getMeter("app");
