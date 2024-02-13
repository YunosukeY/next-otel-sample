import Test from "@/client/Test";
import { action } from "@/server/action";
import Image from "next/image";

const f = async () => {
  console.log("server fetch");
  const res = await fetch("https://example.com/", { cache: "no-cache" });
  const data = await res.text();
  return data;
};

const Home = async () => {
  const data = await f();

  setTimeout(() => {
    action();
  }, 1000);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
      <Test />
    </main>
  );
};

export default Home;
