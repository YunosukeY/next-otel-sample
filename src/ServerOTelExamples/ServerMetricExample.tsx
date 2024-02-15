import os from "os";
import { nodeMeter } from "@/otel/node/nodeMeter";
import React from "react";

const ServerMetricExample: React.FC = () => {
  const memoryGauge = nodeMeter.createObservableGauge("memory");
  memoryGauge.addCallback((observerResult) => {
    observerResult.observe((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024);
  });

  return null;
};

export default ServerMetricExample;
