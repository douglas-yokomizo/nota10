import React, {
  SelectHTMLAttributes,
  useState,
  useRef,
  useEffect,
} from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  fullWidth = false,
  helperText,
  options,
  placeholder,
  className = "",
  id,
  disabled,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;

  // Track when the select is opened/closed
  useEffect(() => {
    const handleFocus = () => setIsOpen(true);
    const handleBlur = () => setIsOpen(false);

    const selectElement = selectRef.current;
    if (selectElement) {
      selectElement.addEventListener("focus", handleFocus);
      selectElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (selectElement) {
        selectElement.removeEventListener("focus", handleFocus);
        selectElement.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

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
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        <select
          ref={selectRef}
          id={selectId}
          className={`${baseClasses} ${errorClasses} ${disabledClasses} pr-10 appearance-none`}
          disabled={disabled}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
          <svg
            className={`h-5 w-5 fill-current transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
};

export default Select;
