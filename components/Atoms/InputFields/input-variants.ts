import { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

export const inputVariants = cva(
  clsx(
    "w-full",
    "rounded-lg",
    "border border-gray-300",
    "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    "outline-none",
    "transition-colors duration-200",
    "placeholder:text-gray-400",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
  ),
  {
    variants: {
      variant: {
        default: "bg-white border-gray-300",
        error: "border-red-500 focus:ring-red-500",
        success: "border-green-500 focus:ring-green-500",
      },
      size: {
        small: clsx("px-2.5 py-1.5", "text-xs"),
        medium: clsx("px-3 py-2", "text-sm"),
        large: clsx("px-4 py-2.5", "text-base"),
      },
      hasStartIcon: {
        true: "pl-10",
        false: "",
      },
      hasEndIcon: {
        true: "pr-10",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      hasStartIcon: false,
      hasEndIcon: false,
    },
  }
);

export type InputFieldsVariants = VariantProps<typeof inputVariants>;
