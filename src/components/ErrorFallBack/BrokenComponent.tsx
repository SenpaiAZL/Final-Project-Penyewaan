"use client";

import { useState } from "react";

export default function BrokenComponent() {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error("Ups, ini error test!");
  }

  return (
    <div>
      <button onClick={() => setError(true)}>Klik untuk Error</button>
    </div>
  );
}
