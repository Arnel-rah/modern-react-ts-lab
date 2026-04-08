import React, { type InputHTMLAttributes } from "react";
import {
  inputContainerStyles,
  labelStyles,
  errorStyles,
  getBaseInputStyles
} from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  type?: "text" | "password" | "email" | "textarea";
  error?: string;
}

const Input = ({ label, type = "text", error, className, ...props }: InputProps) => {
  const hasError = Boolean(error);
  const combinedStyles = `${getBaseInputStyles(hasError)} ${className || ""}`;

  return (
    <div className={inputContainerStyles}>
      <label className={labelStyles}>{label}</label>

      {type === "textarea" ? (
        <textarea
          className={combinedStyles}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          type={type}
          className={combinedStyles}
          {...props}
        />
      )}
      <span className={errorStyles}>
        {error && error}
      </span>
    </div>
  );
};

export default Input;
