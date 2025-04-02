"use client";

import { useState } from "react";

export default function CsrPage() {
  const [content, setContent] = useState("12321321321321");

  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-6xl">CSR Page</h1>
      <button
        className="border p-4 rounded-3xl"
        onClick={() => setContent((prev) => prev + "12321321321321")}>
        Добавить контент
      </button>
      <p className="w-3xs break-words">{content}</p>
    </div>
  );
}
