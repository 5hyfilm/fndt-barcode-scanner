// Path: /src/components/setup/SetupForm.tsx

"use client";

import React, { useState, useCallback } from "react";
import { SetupFormData, SetupFormErrors, SetupFormProps } from "@/types/setup";
import SetupHeader from "./SetupHeader";
import SetupFormFields from "./SetupFormFields";
import SetupFooter from "./SetupFooter";

export default function SetupForm({
  onSubmit,
  isLoading = false,
  initialData = {},
}: SetupFormProps) {
  // Form State
  const [formData, setFormData] = useState<SetupFormData>({
    employeeName: initialData.employeeName || "",
    branchCode: initialData.branchCode || "",
    branchName: initialData.branchName || "",
  });

  const [errors, setErrors] = useState<SetupFormErrors>({});

  // Validation Functions
  const validateEmployeeName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "กรุณากรอกชื่อพนักงาน";
    }
    if (name.trim().length < 2) {
      return "ชื่อพนักงานต้องมีอย่างน้อย 2 ตัวอักษร";
    }
    if (name.trim().length > 100) {
      return "ชื่อพนักงานต้องไม่เกิน 100 ตัวอักษร";
    }
    return undefined;
  };

  const validateBranchCode = (code: string): string | undefined => {
    if (!code.trim()) {
      return "กรุณากรอกรหัสสาขา";
    }
    if (!/^\d{3}$/.test(code)) {
      return "รหัสสาขาต้องเป็นตัวเลข 3 หลัก";
    }
    return undefined;
  };

  const validateBranchName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "กรุณากรอกชื่อสาขา";
    }
    if (name.trim().length < 2) {
      return "ชื่อสาขาต้องมีอย่างน้อย 2 ตัวอักษร";
    }
    if (name.trim().length > 100) {
      return "ชื่อสาขาต้องไม่เกิน 100 ตัวอักษร";
    }
    return undefined;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: SetupFormErrors = {
      employeeName: validateEmployeeName(formData.employeeName),
      branchCode: validateBranchCode(formData.branchCode),
      branchName: validateBranchName(formData.branchName),
    };

    // Remove undefined errors
    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key as keyof SetupFormErrors] === undefined) {
        delete newErrors[key as keyof SetupFormErrors];
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field changes
  const handleFieldChange = useCallback(
    (field: keyof SetupFormData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));

      // Clear error for this field when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    },
    [errors]
  );

  // Handle form submission
  const handleSubmit = useCallback(() => {
    if (validateForm()) {
      // Trim all values before submitting
      const trimmedData: SetupFormData = {
        employeeName: formData.employeeName.trim(),
        branchCode: formData.branchCode.trim(),
        branchName: formData.branchName.trim(),
      };

      onSubmit(trimmedData);
    }
  }, [formData, onSubmit]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <SetupHeader />

          {/* Form Fields */}
          <SetupFormFields
            formData={formData}
            errors={errors}
            isLoading={isLoading}
            onFieldChange={handleFieldChange}
            onSubmit={handleSubmit}
          />

          {/* Footer */}
          <SetupFooter />
        </div>
      </div>
    </div>
  );
}
