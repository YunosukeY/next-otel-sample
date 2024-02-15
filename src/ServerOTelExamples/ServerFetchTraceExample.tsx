import React from "react";

const ServerFetchTraceExample: React.FC = async () => {
  await fetch("https://example.com/", { cache: "no-cache" });

  return null;
};

export default ServerFetchTraceExample;
