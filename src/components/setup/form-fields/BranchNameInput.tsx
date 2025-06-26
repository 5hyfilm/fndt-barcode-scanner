// Path: /src/components/setup/form-fields/BranchNameInput.tsx

import React from "react";
import { FormFieldProps } from "@/types/setup";

interface BranchNameInputProps extends FormFieldProps {}

export default function BranchNameInput({
  value,
  onChange,
  error,
  disabled = false,
}: BranchNameInputProps) {
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
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm12 4a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h10z"
            clipRule="evenodd"
          />
        </svg>
        <label className="text-gray-700 font-medium text-lg">ชื่อสาขา</label>
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="กรอกชื่อสาขา เช่น สาขาสยามพารากอน"
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
        maxLength={100}
      />

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
