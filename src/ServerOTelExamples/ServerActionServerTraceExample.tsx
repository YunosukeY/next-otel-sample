import React from "react";
import { action } from "../serverActionExample";

const ServerActionServerTraceExample: React.FC = () => {
  setTimeout(() => {
    action();
  }, 1000);

  return null;
};

export default ServerActionServerTraceExample;
