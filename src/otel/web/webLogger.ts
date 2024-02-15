import { logs } from "@opentelemetry/api-logs";
import {
  BatchLogRecordProcessor,
  LoggerProvider,
} from "@opentelemetry/sdk-logs";
import { webResource } from "./webResource";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";

const loggerProvider = new LoggerProvider({ resource: webResource });
loggerProvider.addLogRecordProcessor(
  new BatchLogRecordProcessor(new OTLPLogExporter({ url: "/api/logs" }))
);
logs.setGlobalLoggerProvider(loggerProvider);

export const webLogger = logs.getLogger("app");
