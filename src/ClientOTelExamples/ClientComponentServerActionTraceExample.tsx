import { action } from "@/serverActionExample";
import React from "react";

const ClientComponentServerActionTraceExample: React.FC = () => {
  return (
    <button onClick={() => action()}>server action in client component</button>
  );
};

export default ClientComponentServerActionTraceExample;
