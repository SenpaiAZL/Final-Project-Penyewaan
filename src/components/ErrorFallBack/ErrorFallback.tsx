"use client";

import styles from "./ErrorFallback.module.css";

interface ErrorFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oops! Something went wrong.</h2>
      <p className={styles.message}>
        {error?.message || "An unexpected error occurred."}
      </p>
      {resetErrorBoundary && (
        <button onClick={resetErrorBoundary} className={styles.button}>
          Try Again
        </button>
      )}
    </div>
  );
}
