"use client";

import { Logger, configureLoggerProvider } from "../both/logs/logger";

configureLoggerProvider();
export const webLogger = new Logger();
