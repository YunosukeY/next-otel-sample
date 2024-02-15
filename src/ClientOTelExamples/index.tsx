"use client";

import React from "react";
import ClientLogExample from "./ClientLogExample";
import ClientMetricsExample from "./ClientMetricsExample";
import ServerActionClientTraceExample from "./ServerActionClientTraceExample";
import ClientFetchTraceExample from "./ClientFetchTraceExample";

const ClientOTelExamples: React.FC = () => {
  return (
    <>
      <ClientFetchTraceExample />
      <ServerActionClientTraceExample />
      <ClientMetricsExample />
      <ClientLogExample />
    </>
  );
};

export default ClientOTelExamples;
