// Path: /src/components/setup/SetupHeader.tsx

import React from "react";

export default function SetupHeader() {
  return (
    <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-t-3xl px-6 py-8 sm:px-8 sm:py-12 text-center">
      {/* F&N Logo */}
      <div className="mb-4 sm:mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg">
          <div className="text-3xl sm:text-2xl font-bold text-red-600">F&N</div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-white text-3xl sm:text-2xl font-bold mb-3 sm:mb-2 leading-tight">
        ระบบเช็ค Stock สินค้า
      </h1>

      {/* Subtitle */}
      <p className="text-white text-xl sm:text-lg opacity-90">
        F&N Inventory Management
      </p>
    </div>
  );
}
