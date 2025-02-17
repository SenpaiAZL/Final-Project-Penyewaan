import { FC, memo } from "react";
export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}
const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export default memo(ErrorFallback);
