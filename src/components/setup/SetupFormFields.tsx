// Path: /src/components/setup/SetupFormFields.tsx

import React from "react";
import { SetupFormData, SetupFormErrors } from "@/types/setup";
import EmployeeNameInput from "./form-fields/EmployeeNameInput";
import BranchCodeInput from "./form-fields/BranchCodeInput";
import BranchNameInput from "./form-fields/BranchNameInput";
import SubmitButton from "./form-fields/SubmitButton";

interface SetupFormFieldsProps {
  formData: SetupFormData;
  errors: SetupFormErrors;
  isLoading: boolean;
  onFieldChange: (field: keyof SetupFormData, value: string) => void;
  onSubmit: () => void;
}

export default function SetupFormFields({
  formData,
  errors,
  isLoading,
  onFieldChange,
  onSubmit,
}: SetupFormFieldsProps) {
  return (
    <div className="bg-white px-8 py-8">
      {/* Form Description */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          ข้อมูลพนักงานและสาขา
        </h2>
        <p className="text-gray-600">กรุณากรอกข้อมูลก่อนใช้งานระบบ</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-2">
        <EmployeeNameInput
          value={formData.employeeName}
          onChange={(value) => onFieldChange("employeeName", value)}
          error={errors.employeeName}
          disabled={isLoading}
        />

        <BranchCodeInput
          value={formData.branchCode}
          onChange={(value) => onFieldChange("branchCode", value)}
          error={errors.branchCode}
          disabled={isLoading}
        />

        <BranchNameInput
          value={formData.branchName}
          onChange={(value) => onFieldChange("branchName", value)}
          error={errors.branchName}
          disabled={isLoading}
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <SubmitButton
          isLoading={isLoading}
          onClick={onSubmit}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
