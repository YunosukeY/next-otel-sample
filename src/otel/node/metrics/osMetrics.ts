import os from "os";
import { nodeMeter } from "./nodeMeter";

const calcCpuUsage = (cpuInfo: os.CpuInfo[]) => {
  let total = 0;
  for (const cpu of cpuInfo) {
    total += cpu.times.user;
    total += cpu.times.nice;
    total += cpu.times.sys;
    total += cpu.times.idle;
    total += cpu.times.irq;
  }
  let idle = 0;
  for (const cpu of cpuInfo) {
    idle += cpu.times.idle;
  }
  return (total - idle) / total;
};

const observeCpu = () => {
  const cpuUsageGauge = nodeMeter.createObservableGauge("cpu");
  cpuUsageGauge.addCallback((observerResult) => {
    observerResult.observe(calcCpuUsage(os.cpus()));
  });
};

const observeMemory = () => {
  const memoryGauge = nodeMeter.createObservableGauge("memory");
  memoryGauge.addCallback((observerResult) => {
    observerResult.observe((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024);
  });
};

export const observeOsMetrics = () => {
  observeCpu();
  observeMemory();
};
