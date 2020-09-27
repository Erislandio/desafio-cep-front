import React, { FunctionComponent } from "react";
import { InputProps } from "./input.interfaces";

export const Input: FunctionComponent<InputProps> = ({
  disabled,
  onChange,
  placeholder,
  required,
  value,
  name,
}) => (
  <input
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    disabled={disabled}
    name={name}
  />
);
