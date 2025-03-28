import React from "react";
import { Formik } from "formik";
import { Button } from "../ui/button";
import FormField from "../ui/form-field";

type RegisterFormProps = {
  switchToLogin: () => void;
};

interface LoginFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}
interface LoginFormErrors extends Partial<LoginFormValues> {}

const validate = (values: LoginFormValues) => {
  const errors: LoginFormErrors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be at least 8 characters";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Must contain at least one uppercase letter";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "Must contain at least one number";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
    errors.password = "Must contain at least one special character";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ switchToLogin }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={validate}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {(formik) => (
        <form
          className="flex flex-col justify-center gap-4 items-center"
          onSubmit={formik.handleSubmit}
        >
          <FormField
            label="Email Address"
            name="email"
            type="email"
            placeholder="example@gmail.com"
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="********"
          />
          <FormField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="********"
          />
          <Button
            className="w-full mt-4 max-w-46"
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
          >
            Submit
          </Button>
          <p
            className="text-sm hover:underline hover:cursor-pointer"
            onClick={switchToLogin}
          >
            Already have an account?
          </p>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
