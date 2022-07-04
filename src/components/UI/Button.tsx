import { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  type = "button",
  children,
  ...props
}) => {
  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
