import React from "react";
import { FormikProvider, useFormik } from "formik";

const FormikContext = React.createContext({});

type FormikProps<T = Record<string, any>> = {
  initialValues: T;
  validate: (values: T) => Partial<Record<keyof T, string>>;
  onSubmit: (values: T) => void;
  children: React.ReactNode | ((props: any) => React.ReactNode);
};

export const Formik = <T extends Record<string, any>>({
  children,
  ...props
}: FormikProps<T>) => {
  const formikStateAndHelpers = useFormik(props);
  return (
    <FormikProvider value={formikStateAndHelpers}>
      {typeof children === "function"
        ? children(formikStateAndHelpers)
        : children}
    </FormikProvider>
  );
};
