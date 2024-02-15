import os from "os";
import { nodeMeter } from "./nodeMeter";

const observeMemory = () => {
  const memoryGauge = nodeMeter.createObservableGauge("memory");
  memoryGauge.addCallback((observerResult) => {
    observerResult.observe((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024);
  });
};

export const observeOsMetrics = () => {
  observeMemory();
};
