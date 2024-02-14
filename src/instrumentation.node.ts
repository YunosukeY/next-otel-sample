import { nodeSdk } from "./otel/node/sdk";

nodeSdk.start();

if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  process.on("SIGTERM", () => {
    nodeSdk.shutdown();
  });
  process.on("SIGINT", () => {
    nodeSdk.shutdown();
  });
}
