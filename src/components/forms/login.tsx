import React from "react";
import { useFormik } from "formik";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type LoginFormProps = {
  switchToRegister: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ switchToRegister }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center gap-4 items-center"
    >
      <div className="flex flex-col gap-2 items-center">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="example@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="********"
        />
      </div>
      <Button className="w-full mt-4" type="submit">
        Login
      </Button>
      <p
        className="text-sm hover:underline hover:cursor-pointer"
        onClick={switchToRegister}
      >
        I don't have an account
      </p>
    </form>
  );
};

export default LoginForm;
