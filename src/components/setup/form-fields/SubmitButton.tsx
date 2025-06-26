// Path: /src/components/setup/form-fields/SubmitButton.tsx

import React from "react";

interface SubmitButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export default function SubmitButton({
  isLoading = false,
  disabled = false,
  onClick,
}: SubmitButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`
        w-full py-6 px-8 rounded-2xl text-xl font-bold
        transition-all duration-300 ease-in-out
        flex items-center justify-center space-x-4
        min-h-[70px] touch-manipulation
        shadow-xl active:scale-95
        ${
          isDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
            : "bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 text-white hover:shadow-2xl hover:scale-105"
        }
      `}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <svg
          className="animate-spin w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Text */}
      <span className="leading-none">
        {isLoading ? "กำลังดำเนินการ..." : "เข้าใช้งานระบบ"}
      </span>

      {/* Arrow Icon */}
      {!isLoading && (
        <svg
          className="w-7 h-7 transform transition-transform duration-200 group-hover:translate-x-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
