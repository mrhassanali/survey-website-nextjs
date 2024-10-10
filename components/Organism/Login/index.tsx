"use client";
import { useState } from "react";
import Link from "next/link";
import { DASHBOARD, REGISTER } from "@/app/lib/constants/Route";

import LoginAvatar from "@/assets/image/login-avatar.png";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/16/solid";
import { Button } from "@/components/Atoms/Button";
import SignInWithGoogle from "@/components/Atoms/Button/SignInWithGoogle";
import { Formik, Form } from "formik";
import { YupValidation } from "./YupValidation";
import { InputFields } from "@/components/Atoms/InputFields";
import { signIn } from "next-auth/react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const initialValue: LoginForm = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: LoginForm) => {
    await signIn("credentials", {
      redirect: true,
      email: values.email,
      password: values.password,
      callbackUrl: DASHBOARD,
    });
    // if (signInResponse?.ok) {
    //   router.push(DASHBOARD);
    //   enqueueSnackbar("Successfully logged in", { variant: "success" });
    // } else {
    //   enqueueSnackbar("Invalid email or password", { variant: "error" });
    // }
    // console.log(signInResponse);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Illustration */}
          <div className="bg-blue-50 md:w-1/2 p-8 flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-500">Survey</h2>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={LoginAvatar.src}
                alt="Person with laptop and robot"
                className="max-w-[80%]"
              />
            </div>
            <div className="text-center text-sm text-gray-500 mt-8">
              © 2024 All Rights Reserved
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="md:w-1/2 p-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-2">WELCOME BACK 👋</h2>
              <p className="text-gray-600 mb-8">
                Enter your email and password to access your account
              </p>

              <Formik
                initialValues={initialValue}
                validationSchema={YupValidation}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  const { email, password } = props.values;
                  return (
                    <Form className="space-y-6">
                      {/* Email Field */}
                      <InputFields
                        type="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        id="email"
                        error={props.errors.email}
                        helperText={props.errors.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        placeholder="johndoe@example.com"
                        autoComplete="one"
                      />

                      <InputFields
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        name="password"
                        value={password}
                        id="password"
                        error={props.errors.password}
                        helperText={props.errors.password}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        placeholder="Enter your password"
                        autoComplete="on"
                        endIcon={
                          showPassword ? (
                            <EyeSlashIcon
                              className="text-black"
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          ) : (
                            <EyeIcon
                              className="text-black"
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          )
                        }
                      />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 text-blue-500 rounded border-gray-300"
                          />
                          <label
                            htmlFor="remember"
                            className="ml-2 text-sm text-gray-600"
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="#"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>

                      <Button
                        variant={"primary"}
                        type="submit"
                        size="large"
                        fullWidth={true}
                      >
                        Sign in
                      </Button>

                      <div className="text-center">
                        <span className="text-sm text-gray-600">
                          Don't have an account?
                          <Link
                            href={REGISTER}
                            className="text-blue-500 hover:underline ml-1"
                          >
                            Sign up
                          </Link>
                        </span>
                      </div>

                      <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">
                            Or
                          </span>
                        </div>
                      </div>

                      <SignInWithGoogle />
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
