"use client";
import React, { useCallback } from "react";
import { useErrorBoundary } from "react-error-boundary";

const ErrorBtn = () => {
  //   const { showBoundary } = useErrorBoundary();
  const callError = useCallback(() => {
    try {
      throw new Error("Test errpor");
    } catch (error) {
      // showBoundary(error);
    }
  }, []);
  return (
    <div>
      <button onClick={callError()}>Trigger Error</button>
    </div>
  );
};

export default ErrorBtn;
