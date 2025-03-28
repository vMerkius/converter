import React from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./input";
import ErrorMessage from "./error-message";
import { useField } from "formik";

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  placeholder,
  name,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col gap-2 items-center">
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`max-w-46 ${
          meta.touched && meta.error ? "border-red-900" : ""
        }`}
      />
      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </div>
  );
};

export default FormField;
