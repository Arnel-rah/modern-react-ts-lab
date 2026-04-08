import React, { type ButtonHTMLAttributes } from "react";
import { baseStyles, sizes, variants } from "./Button.styles";

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
