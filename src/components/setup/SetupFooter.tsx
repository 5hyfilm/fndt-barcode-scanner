// Path: /src/components/setup/SetupFooter.tsx

import React from "react";

export default function SetupFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-50 rounded-b-3xl px-6 py-5 sm:py-4 text-center border-t border-gray-100">
      <p className="text-gray-500 text-base sm:text-sm leading-relaxed">
        © {currentYear} F&N Inventory Management System
      </p>
    </div>
  );
}
