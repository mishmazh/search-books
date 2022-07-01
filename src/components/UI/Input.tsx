import React, { FC } from "react";

interface InputProps {
  placeholder?: string;
}

const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <div className="w-[80%]">
      <input
        className="w-full h-11 text-black-500 p-3"
        type="text"
        {...props}
      />
    </div>
  );
};

export default Input;
