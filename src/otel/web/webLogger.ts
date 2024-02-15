import { logs } from "@opentelemetry/api-logs";
import {
  LoggerProvider,
  SimpleLogRecordProcessor,
} from "@opentelemetry/sdk-logs";
import { webResource } from "./webResource";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";

const loggerProvider = new LoggerProvider({ resource: webResource });
loggerProvider.addLogRecordProcessor(
  new SimpleLogRecordProcessor(new OTLPLogExporter({ url: "/api/logs" }))
);
logs.setGlobalLoggerProvider(loggerProvider);

export const webLogger = logs.getLogger("app");
