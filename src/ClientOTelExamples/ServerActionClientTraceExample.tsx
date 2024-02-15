import { action } from "@/serverActionExample";
import React from "react";

const ServerActionClientTraceExample: React.FC = () => {
  return (
    <button onClick={() => action()}>server action in client component</button>
  );
};

export default ServerActionClientTraceExample;
