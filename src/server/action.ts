"use server";

export const action = async () => {
  console.log("server action");
  const res = await fetch("https://example.com/", { cache: "no-cache" });
  const data = await res.text();
  return data;
};
