"use client";

import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/typography";

interface FormFieldProps {
  name: string;
  label: string;
  icon?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export function FormField({
  name,
  label,
  icon,
  type = "text",
  placeholder,
  className,
}: FormFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className={cn("space-y-sm w-full", className)}>
          <Text as="label" type="label-caps" className="text-tertiary flex items-center gap-xs">
            {icon && (
              <span className="material-symbols-outlined text-[16px]">
                {icon}
              </span>
            )}
            {label}
          </Text>
          <div className="relative flex items-center w-full">
            <span className="absolute left-md font-code-sm text-code-sm text-secondary-fixed-dim">
              &gt;
            </span>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={cn(
                "w-full flex-1 bg-surface-container-highest border-2 border-outline-variant pl-xl pr-md py-md font-code-sm text-code-sm text-on-surface focus:border-secondary-fixed-dim focus:outline-none focus:ring-0 placeholder:text-outline shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.5)] transition-colors",
                error && "border-error focus:border-error text-error placeholder:text-error/50"
              )}
            />
          </div>
          {error && (
            <Text type="code-sm" className="text-error mt-xs">
              {error.message}
            </Text>
          )}
        </div>
      )}
    />
  );
}
