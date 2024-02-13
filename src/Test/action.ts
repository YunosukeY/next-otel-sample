"use server";

export const action = async () => {
  console.log("server action in client component");
  const res = await fetch("https://example.com/", { cache: "no-cache" });
  const data = await res.text();
  return data;
};
