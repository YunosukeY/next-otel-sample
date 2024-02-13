import Test from "@/Test";
import Image from "next/image";

const f = async () => {
  console.log("server fetch");
  const res = await fetch("https://example.com/", { cache: "no-cache" });
  const data = await res.text();
  return data;
};

const Home = async () => {
  const data = await f();

  const action = async () => {
    "use server";
    console.log("server action in server component");
    const res = await fetch("https://example.com/", { cache: "no-cache" });
    const data = await res.text();
    return data;
  };
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
