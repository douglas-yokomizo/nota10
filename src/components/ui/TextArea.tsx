import React, { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  helperText?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  fullWidth = false,
  helperText,
  className = "",
  id,
  disabled,
  rows = 4,
  ...props
}) => {
  const textareaId =
    id || `textarea-${Math.random().toString(36).substring(2, 9)}`;

  const baseClasses =
    "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 px-3";
  const errorClasses = error
    ? "border-error text-error placeholder-error/50 focus:border-error focus:ring-error"
    : "";
  const disabledClasses = disabled
    ? "bg-gray-100 text-gray-500 cursor-not-allowed"
    : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <div className={`${widthClass} ${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        <textarea
          id={textareaId}
          rows={rows}
          className={`${baseClasses} ${errorClasses} ${disabledClasses}`}
          disabled={disabled}
          {...props}
        />
      </div>
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
};

export default TextArea;
