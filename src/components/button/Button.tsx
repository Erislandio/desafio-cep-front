import React, { FunctionComponent } from "react";
import { ButtonProps } from "./button.interfaces";

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  onClick,
  children,
  disabled,
  type,
}) => (
  <button
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={className}
  >
    {children}
  </button>
);
