"use client";

import { useState } from "react";

export const ClientComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <button className="border p-4" onClick={() => setCount((prev) => ++prev)}>
      {count}
    </button>
  );
};
