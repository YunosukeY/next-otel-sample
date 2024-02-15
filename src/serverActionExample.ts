"use server";

export const action = async () => {
  await fetch("https://example.com/", { cache: "no-cache" });
};
