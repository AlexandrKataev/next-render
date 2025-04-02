"use client";

import { PropsWithChildren, useState } from "react";

export const ClientComponentWithChildren = ({
  children,
}: PropsWithChildren) => {
  const [isColor, setIsColor] = useState(false);
  return (
    <div
      className={`border rounded-3xl  p-6 ${isColor ? "bg-blue-100" : ""}`}
      onClick={() => setIsColor((prev) => !prev)}>
      {children}
    </div>
  );
};
