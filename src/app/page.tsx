import Test from "@/client/Test";
import { getMeterFor } from "@/otel/both/metrics/getMeterFor";
import { logger } from "@/otel/both/logs/logger";
import { recordOsMetrics } from "@/otel/node/osMetrics";
import { action } from "@/server/action";
import Image from "next/image";
import { shutdownMeterProvider } from "@/otel/both/metrics/shutdownMeterProvider";

const f = async () => {
  console.log("server fetch");
  const res = await fetch("https://example.com/", { cache: "no-cache" });
  const data = await res.text();
  return data;
};

const Home = async () => {
  logger.info("server component");

  const data = await f();

  setTimeout(() => {
    action();
  }, 1000);

  const nodeMeter = getMeterFor("node");
  recordOsMetrics(nodeMeter);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
      <Test />
    </main>
  );
};

export default Home;
