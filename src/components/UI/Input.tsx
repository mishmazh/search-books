import { ChangeEvent, FC, KeyboardEvent } from "react";

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

const Input: FC<InputProps> = ({ className, type = "text", ...props }) => {
  return <input className={className} type={type} {...props} />;
};

export default Input;
