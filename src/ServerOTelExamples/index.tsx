import React from "react";
import ServerLogExample from "./ServerLogExample";
import ServerMetricExample from "./ServerMetricExample";
import ServerActionServerTraceExample from "./ServerActionServerTraceExample";
import ServerFetchTraceExample from "./ServerFetchTraceExample";

const ServerOTelExamples: React.FC = () => {
  return (
    <>
      <ServerFetchTraceExample />
      <ServerActionServerTraceExample />
      <ServerMetricExample />
      <ServerLogExample />
    </>
  );
};

export default ServerOTelExamples;
