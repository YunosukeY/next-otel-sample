import { trace } from "@opentelemetry/api";

export const nodeTracer = trace.getTracer("app");
