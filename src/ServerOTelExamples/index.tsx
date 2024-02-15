import React from "react";
import ServerLogExample from "./ServerLogExample";
import ServerMetricsExample from "./ServerMetricsExample";
import ServerActionServerTraceExample from "./ServerActionServerTraceExample";
import ServerFetchTraceExample from "./ServerFetchTraceExample";

const ServerOTelExamples: React.FC = () => {
  return (
    <>
      <ServerFetchTraceExample />
      <ServerActionServerTraceExample />
      <ServerMetricsExample />
      <ServerLogExample />
    </>
  );
};

export default ServerOTelExamples;
