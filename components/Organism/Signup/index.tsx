"use client";
import { Button } from "@/components/Atoms/Button";
import SignInWithGoogle from "@/components/Atoms/Button/SignInWithGoogle";
import { useState } from "react";
import LoginAvatar from "@/assets/image/login-avatar.png";
import { LOGIN } from "@/app/lib/constants/Route";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form } from "formik";
import { YupValidationSchema } from "./YupValidation";

import {
  UserCircleIcon,
  AtSymbolIcon,
  PhoneArrowDownLeftIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { InputFields } from "@/components/Atoms/InputFields";

interface SignUpForm {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  termAndCondition: boolean;
}

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValue: SignUpForm = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termAndCondition: false,
  };

  const handleSubmit = (values: SignUpForm) => {
    console.log(values);
    alert(JSON.stringify(values));
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
            <div className="flex flex-col justify-center items-center space-y-4">
              <Image
                src={LoginAvatar}
                alt="Sign up illustration"
                className="max-w-[80%]"
                priority={true}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Join Our Community
                </h3>
                <p className="text-gray-600">
                  Create an account and get access to all features
                </p>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-8">
              © 2024 All Rights Reserved
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="md:w-1/2 p-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-2">Create Account ✨</h2>
              <p className="text-gray-600 mb-8">
                Please fill in the details to create your account
              </p>

              <Formik
                initialValues={initialValue}
                validationSchema={YupValidationSchema}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  const {
                    fullName,
                    email,
                    phone,
                    password,
                    confirmPassword,
                    termAndCondition,
                  } = props.values;
                  return (
                    <Form className="space-y-5">
                      {/* Name Field */}
                      <InputFields
                        type="text"
                        label="Full Name"
                        name="fullName"
                        value={fullName}
                        id="fullName"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        placeholder="John Doe"
                        error={props.errors.fullName}
                        helperText={props.errors.fullName}
                        autoComplete="given-name"
                        startIcon={
                          <UserCircleIcon className="h-5 w-5 text-gray-400" />
                        }
                      />

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
                        startIcon={
                          <AtSymbolIcon className="h-5 w-5 text-gray-400" />
                        }
                      />

                      {/* Phone Field */}
                      <InputFields
                        type="tel"
                        label="Phone Number"
                        name="phone"
                        value={phone}
                        id="phone"
                        error={props.errors.phone}
                        helperText={props.errors.phone}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        placeholder="+1 (555) 000-0000"
                        startIcon={
                          <PhoneArrowDownLeftIcon className="h-5 w-5 text-gray-400" />
                        }
                        autoComplete="tel"
                      />

                      {/* Password Field */}
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
                        autoComplete="new-password"
                        startIcon={
                          <LockClosedIcon className="h-5 w-5 text-gray-400" />
                        }
                      />

                      {/* Confirm Password Field */}
                      <InputFields
                        type={showConfirmPassword ? "text" : "password"}
                        label="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        id="confirmPassword"
                        error={props.errors.confirmPassword}
                        helperText={props.errors.confirmPassword}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        placeholder="Confirm your password"
                        autoComplete="new-password"
                        startIcon={
                          <LockClosedIcon className="h-5 w-5 text-gray-400" />
                        }
                      />

                      {/* Terms and Conditions */}
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          name="termAndCondition"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          checked={termAndCondition}
                          id="termAndCondition"
                          className="mt-1 h-4 w-4 text-blue-500 rounded border-gray-300"
                        />
                        <label
                          htmlFor="termAndCondition"
                          className="ml-2 text-sm text-gray-600"
                        >
                          I agree to the
                          <a
                            href="#"
                            className="text-blue-500 hover:underline ml-1"
                          >
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-blue-500 hover:underline">
                            Privacy Policy
                          </a>
                        </label>
                      </div>

                      {/* Sign Up Button */}
                      <Button
                        variant={"primary"}
                        type="submit"
                        size="large"
                        fullWidth={true}
                      >
                        Create Account
                      </Button>

                      {/* Sign In Link */}
                      <div className="text-center">
                        <span className="text-sm text-gray-600">
                          Already have an account?
                          <Link
                            href={LOGIN}
                            className="text-blue-500 hover:underline ml-1"
                          >
                            Sign in
                          </Link>
                        </span>
                      </div>

                      {/* Social Sign Up */}
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
