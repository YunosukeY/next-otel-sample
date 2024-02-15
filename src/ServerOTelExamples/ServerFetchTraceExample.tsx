import React from "react";

const f = async () => {
  const res = await fetch("https://example.com/", { cache: "no-cache" });
  const data = await res.text();
  return data;
};

const ServerFetchTraceExample: React.FC = async () => {
  await f();

  return null;
};

export default ServerFetchTraceExample;
