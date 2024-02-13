import { context, trace } from "@opentelemetry/api";
import { getWebTracer } from "./getWebTracer";

export const callWithSpan = async <Output>(f: () => Promise<Output>) => {
  const webTracer = await getWebTracer();
  const span = webTracer.startSpan("callWithSpan");
  const output = await context.with(
    trace.setSpan(context.active(), span),
    async () => {
      const output = await f().then((output) => {
        trace
          .getSpan(context.active())
          ?.addEvent("fetching-single-span-completed");
        span.end();
        return output;
      });
      return output;
    }
  );
  return output;
};
