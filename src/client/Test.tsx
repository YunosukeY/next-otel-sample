"use client";

import React, { useEffect, useState } from "react";
import { action } from "../server/action";

const f = async () => {
  console.log("client fetch");
  const res = await fetch("https://example.com/", {
    method: "GET",
    mode: "no-cors",
  });
  const data = await res.text();
  return data;
};

const Test: React.FC = () => {
  const [data, setData] = useState<string>();
  useEffect(() => {
    f().then((data) => setData(data));
  }, []);

  return (
    <div>
      {data}
      <button onClick={() => action()}>
        server action in client component
      </button>
    </div>
  );
};

export default Test;
