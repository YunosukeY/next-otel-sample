import { Logger as OTelLogger, SeverityNumber } from "@opentelemetry/api-logs";
import {
  LoggerProvider,
  SimpleLogRecordProcessor,
  ConsoleLogRecordExporter,
} from "@opentelemetry/sdk-logs";

class Logger {
  _logger: OTelLogger;

  constructor(name: string) {
    const loggerProvider = new LoggerProvider();
    loggerProvider.addLogRecordProcessor(
      new SimpleLogRecordProcessor(new ConsoleLogRecordExporter()) // まだInMemoryとConsoleLogしかない
    );
    this._logger = loggerProvider.getLogger(name);
  }

  info(message: string) {
    this._logger.emit({
      severityNumber: SeverityNumber.INFO,
      severityText: "INFO",
      body: message,
    });
  }
}

export const logger = new Logger("default");
