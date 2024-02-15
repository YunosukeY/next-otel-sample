"use client";

import React from "react";
import ClientLogExample from "./ClientLogExample";
import ClientMetricsExample from "./ClientMetricsExample";
import ClientComponentServerActionTraceExample from "./ClientComponentServerActionTraceExample";
import ClientFetchTraceExample from "./ClientFetchTraceExample";

const ClientOTelExamples: React.FC = () => {
  return (
    <>
      <ClientFetchTraceExample />
      <ClientComponentServerActionTraceExample />
      <ClientMetricsExample />
      <ClientLogExample />
    </>
  );
};

export default ClientOTelExamples;
