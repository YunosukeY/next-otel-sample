import React from "react";
import { action } from "../serverActionExample";

const ServerComponentServerActionTraceExample: React.FC = () => {
  return (
    <form action={action}>
      <button type="submit">server action in server component</button>
    </form>
  );
};

export default ServerComponentServerActionTraceExample;
