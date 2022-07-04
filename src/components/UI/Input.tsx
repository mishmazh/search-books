import React, { FC } from "react";

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: any) => any;
  onKeyDown: any;
  autoFocus: any;
}

const Input: FC<InputProps> = ({ className, type = "text", ...props }) => {
  return <input className={className} type={type} {...props} />;
};

export default Input;
