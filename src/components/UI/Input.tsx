import React, { FC } from "react";

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value: any;
  onChange: (e: any) => any;
  onKeyDown: any;
}

const Input: FC<InputProps> = ({ className, type = "text", ...props }) => {
  return <input className={className} {...props} />;
};

export default Input;
