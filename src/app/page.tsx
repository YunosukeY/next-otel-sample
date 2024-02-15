import Test from "@/client/Test";
import { nodeLogger } from "@/otel/node/nodeLogger";
import { observeOsMetrics } from "@/otel/node/metrics/osMetrics";
import { action } from "@/server/action";
import { SeverityNumber } from "@opentelemetry/api-logs";

const f = async () => {
  const res = await fetch("https://example.com/", { cache: "no-cache" });
  const data = await res.text();
  return data;
};

const Home = async () => {
  nodeLogger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: "INFO",
    body: "server component",
  });

  const data = await f();

  setTimeout(() => {
    action();
  }, 1000);

  observeOsMetrics();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
      <Test />
    </main>
  );
};

export default Home;
