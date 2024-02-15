import React from "react";
import ServerLogExample from "./ServerLogExample";
import ServerMetricExample from "./ServerMetricExample";
import ServerComponentServerActionTraceExample from "./ServerComponentServerActionTraceExample";
import ServerFetchTraceExample from "./ServerFetchTraceExample";

const ServerOTelExamples: React.FC = () => {
  return (
    <>
      <ServerFetchTraceExample />
      <ServerComponentServerActionTraceExample />
      <ServerMetricExample />
      <ServerLogExample />
    </>
  );
};

export default ServerOTelExamples;
