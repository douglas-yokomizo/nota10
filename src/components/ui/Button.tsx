import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "text" | "danger";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all";

  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary-dark text-white focus:ring-primary/50",
    secondary:
      "bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary/50",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary/10 focus:ring-primary/30",
    text: "bg-transparent text-primary hover:bg-primary/10 focus:ring-primary/30",
    danger: "bg-error hover:bg-error/90 text-white focus:ring-error/50",
  };

  const sizeClasses = {
    small: "text-sm px-3 py-1.5 rounded",
    medium: "text-base px-4 py-2 rounded-md",
    large: "text-lg px-6 py-3 rounded-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
