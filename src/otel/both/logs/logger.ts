import {
  Logger as OTelLogger,
  SeverityNumber,
  logs,
} from "@opentelemetry/api-logs";
import {
  LoggerProvider,
  SimpleLogRecordProcessor,
  ConsoleLogRecordExporter,
} from "@opentelemetry/sdk-logs";

export const configureLoggerProvider = () => {
  const loggerProvider = new LoggerProvider();
  loggerProvider.addLogRecordProcessor(
    new SimpleLogRecordProcessor(new ConsoleLogRecordExporter()) // まだInMemoryとConsoleLogしかない
  );
  logs.setGlobalLoggerProvider(loggerProvider);
};

export class Logger {
  private _logger: OTelLogger;

  constructor() {
    this._logger = logs.getLogger("app");
  }

  trace(message: string) {
    this._logger.emit({
      severityNumber: SeverityNumber.TRACE,
      severityText: "TRACE",
      body: message,
    });
  }

  debug(message: string) {
    this._logger.emit({
      severityNumber: SeverityNumber.DEBUG,
      severityText: "DEBUG",
      body: message,
    });
  }

  info(message: string) {
    this._logger.emit({
      severityNumber: SeverityNumber.INFO,
      severityText: "INFO",
      body: message,
    });
  }

  warn(message: string) {
    this._logger.emit({
      severityNumber: SeverityNumber.WARN,
      severityText: "WARN",
      body: message,
    });
  }

  error(message: string) {
    this._logger.emit({
      severityNumber: SeverityNumber.ERROR,
      severityText: "ERROR",
      body: message,
    });
  }

  fatal(message: string) {
    this._logger.emit({
      severityNumber: SeverityNumber.FATAL,
      severityText: "FATAL",
      body: message,
    });
  }
}
