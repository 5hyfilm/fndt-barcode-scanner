// Path: /src/components/setup/index.ts

// Main Setup Components
export { default as SetupForm } from "./SetupForm";
export { default as SetupHeader } from "./SetupHeader";
export { default as SetupFormFields } from "./SetupFormFields";
export { default as SetupFooter } from "./SetupFooter";

// Form Field Components
export { default as EmployeeNameInput } from "./form-fields/EmployeeNameInput";
export { default as BranchCodeInput } from "./form-fields/BranchCodeInput";
export { default as BranchNameInput } from "./form-fields/BranchNameInput";
export { default as SubmitButton } from "./form-fields/SubmitButton";

// Types
export type {
  SetupFormData,
  SetupFormErrors,
  SetupFormProps,
  FormFieldProps,
} from "@/types/setup";
