import Test from "@/client/Test";
import { nodeLogger } from "@/otel/node/nodeLogger";
import { observeMetrics } from "@/otel/node/osMetrics";
import { action } from "@/server/action";

const f = async () => {
  const res = await fetch("https://example.com/", { cache: "no-cache" });
  const data = await res.text();
  return data;
};

const Home = async () => {
  nodeLogger.info("server component");

  const data = await f();

  setTimeout(() => {
    action();
  }, 1000);

  observeMetrics();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
      <Test />
    </main>
  );
};

export default Home;
