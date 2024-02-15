import { logs } from "@opentelemetry/api-logs";

export const nodeLogger = logs.getLogger("app");
