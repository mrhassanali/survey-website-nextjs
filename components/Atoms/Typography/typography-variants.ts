import { cva, type VariantProps } from "class-variance-authority";

export type TypographyVariants = VariantProps<typeof typographyVariants>;

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: [
        "scroll-m-20",
        "text-4xl",
        "font-extrabold",
        "tracking-tight",
        "lg:text-5xl",
      ],
      h2: [
        "scroll-m-20",
        "border-b",
        "pb-2",
        "text-3xl",
        "font-semibold",
        "tracking-tight",
        "first:mt-0",
      ],
      h3: [
        "scroll-m-20",
        "text-2xl",
        "font-semibold",
        "tracking-tight",
      ],
      h4: [
        "scroll-m-20",
        "text-xl",
        "font-semibold",
        "tracking-tight",
      ],
      p: [
        "leading-7",
        "[&:not(:first-child)]:mt-6",
      ],
      blockquote: [
        "mt-6",
        "border-l-2",
        "pl-6",
        "italic",
      ],
      list: [
        "my-6",
        "ml-6",
        "list-disc",
        "[&>li]:mt-2",
      ],
      lead: [
        "text-xl",
        "text-slate-700",
        "dark:text-slate-400",
      ],
      large: [
        "text-lg",
        "font-semibold",
      ],
      small: [
        "text-sm",
        "font-medium",
        "leading-none",
      ],
      muted: [
        "text-sm",
        "text-slate-500",
        "dark:text-slate-400",
      ],
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      default: "text-slate-900 dark:text-slate-50",
      muted: "text-slate-500 dark:text-slate-400",
      primary: "text-primary-500 dark:text-primary-400",
      success: "text-success-500 dark:text-success-400",
      warning: "text-warning-500 dark:text-warning-400",
      danger: "text-danger-500 dark:text-danger-400",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "normal",
    align: "left",
    color: "default",
  },
});