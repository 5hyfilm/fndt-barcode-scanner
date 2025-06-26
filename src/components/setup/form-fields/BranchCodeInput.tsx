// Path: /src/components/setup/form-fields/BranchCodeInput.tsx

import React from "react";
import { FormFieldProps } from "@/types/setup";

interface BranchCodeInputProps extends FormFieldProps {}

export default function BranchCodeInput({
  value,
  onChange,
  error,
  disabled = false,
}: BranchCodeInputProps) {
  const handleChange = (inputValue: string) => {
    // Allow only numbers and limit to 3 digits
    const numericValue = inputValue.replace(/\D/g, "");
    if (numericValue.length <= 3) {
      onChange(numericValue);
    }
  };

  return (
    <div className="mb-6">
      {/* Label with Icon */}
      <div className="flex items-center mb-3">
        <svg
          className="w-5 h-5 text-gray-600 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 2a1 1 0 110 2H4a1 1 0 110-2h12zM4 10a1 1 0 110-2h4a1 1 0 110 2H4z"
            clipRule="evenodd"
          />
        </svg>
        <label className="text-gray-700 font-medium text-lg">รหัสสาขา</label>
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="กรอกรหัสสาขา เช่น 001, 002"
        disabled={disabled}
        className={`
          w-full px-4 py-4 text-lg border-2 rounded-xl
          transition-all duration-200 ease-in-out
          placeholder-gray-400 
          ${
            error
              ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white"
          }
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
        maxLength={3}
        inputMode="numeric"
        pattern="[0-9]*"
      />

      {/* Helper Text */}
      <p className="mt-2 text-gray-500 text-sm">
        ใส่เฉพาะตัวเลข 0-9 (3-10 หลัก)
      </p>

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-red-600 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
