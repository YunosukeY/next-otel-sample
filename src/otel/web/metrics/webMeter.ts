"use client";

import { metrics } from "@opentelemetry/api";

export const webMeter = metrics.getMeter("app");
