import { logs } from "@opentelemetry/api-logs";
import {
  LoggerProvider,
  SimpleLogRecordProcessor,
  ConsoleLogRecordExporter,
} from "@opentelemetry/sdk-logs";
import { Logger } from "@/otel/both/logs/Logger";
import { webResource } from "./webResource";

const loggerProvider = new LoggerProvider({ resource: webResource });
loggerProvider.addLogRecordProcessor(
  new SimpleLogRecordProcessor(new ConsoleLogRecordExporter()) // まだInMemoryとConsoleLogしかない
);
logs.setGlobalLoggerProvider(loggerProvider);

export const webLogger = new Logger();
