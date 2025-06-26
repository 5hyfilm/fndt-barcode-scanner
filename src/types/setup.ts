// Path: /src/types/setup.ts

export interface SetupFormData {
  employeeName: string;
  branchCode: string;
  branchName: string;
}

export interface SetupFormErrors {
  employeeName?: string;
  branchCode?: string;
  branchName?: string;
}

export interface SetupFormProps {
  onSubmit: (data: SetupFormData) => void;
  isLoading?: boolean;
  initialData?: Partial<SetupFormData>;
}

export interface FormFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}
