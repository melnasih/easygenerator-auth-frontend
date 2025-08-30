// src/components/ErrorFallback.tsx
import React, { useEffect, useRef } from "react";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  const retryButtonRef = useRef<HTMLButtonElement>(null);

  // Focus the retry button when error occurs for accessibility
  useEffect(() => {
    retryButtonRef.current?.focus();
  }, []);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="flex flex-col items-center justify-center p-6 bg-red-50 border border-red-300 rounded-md"
    >
      <h2 className="text-lg font-semibold text-red-700 mb-2">Something went wrong</h2>
      <pre className="text-sm text-red-600 mb-4">{error.message}</pre>
      <button
        ref={retryButtonRef}
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        aria-label="Retry action"
      >
        Try Again
      </button>
    </div>
  );
};