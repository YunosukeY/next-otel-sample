import { context, trace } from "@opentelemetry/api";
import { webTracer } from "./webTracer";

export const callWithSpan = async <Output>(f: () => Promise<Output>) => {
  const span = webTracer.startSpan("callWithSpan");
  const output = await context.with(
    trace.setSpan(context.active(), span),
    async () => {
      const output = await f();
      span.end();
      return output;
    }
  );
  return output;
};
