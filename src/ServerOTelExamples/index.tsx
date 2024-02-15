import React from "react";
import ServerLogExample from "./ServerLogExample";
import ServerMetricExample from "./ServerMetricExample";
import ServerComponentServerActionTraceExample from "./ServerComponentServerActionTraceExample";
import ServerFetchTraceExample from "./ServerFetchTraceExample";
import ServerManualTraceExample from "./ServerManualTraceExample";

const ServerOTelExamples: React.FC = () => {
  return (
    <>
      <ServerFetchTraceExample />
      <ServerComponentServerActionTraceExample />
      <ServerManualTraceExample />
      <ServerMetricExample />
      <ServerLogExample />
    </>
  );
};

export default ServerOTelExamples;
