import { ComponentProps, ReactNode } from "react";
import { InputFieldsVariants, inputVariants } from "./input-variants";
import clsx from "clsx";

interface InputFieldsProps
  extends Omit<ComponentProps<"input">, "size">,
    InputFieldsVariants {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  error?: string;
  helperText?: string;
  wrapperClassName?: string;
  labelClassName?: string;
}

export const InputFields = ({
  type = "text",
  className,
  wrapperClassName,
  labelClassName,
  label,
  startIcon,
  endIcon,
  error,
  helperText,
  variant,
  size,
  id,
  disabled,
  ...props
}: InputFieldsProps) => {
  const renderIcon = (icon: ReactNode, position: "start" | "end") => {
    if (!icon) return null;

    return (
      <div
        className={clsx(
          "absolute inset-y-0 flex items-center",
          position === "start" ? "left-0 pl-3" : "right-0 pr-3"
        )}
      >
        <div
          className={clsx(
            "h-5 w-5",
            error ? "text-red-400" : "text-gray-400",
            disabled && "opacity-50"
          )}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {icon}
        </div>
      </div>
    );
  };

  return (
    <div className={clsx("w-full space-y-1.5", wrapperClassName)}>
      {label && (
        <label
          htmlFor={id ? id : ""}
          className={clsx(
            "block text-sm font-medium",
            disabled ? "text-gray-400" : "text-gray-700",
            labelClassName
          )}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {renderIcon(startIcon, "start")}

        <input
          type={type}
          id={id}
          disabled={disabled}
          className={clsx(
            inputVariants({
              variant: error ? "error" : variant,
              size,
              hasStartIcon: !!startIcon,
              hasEndIcon: !!endIcon,
            }),
            className
          )}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-helper` : undefined
          }
          {...props}
        />

        {renderIcon(endIcon, "end")}
      </div>

      {(error || helperText) && (
        <p
          id={error ? `${id}-error` : `${id}-helper`}
          className={clsx("text-sm", error ? "text-red-500" : "text-gray-500")}
          role={error ? "alert" : "status"}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};
