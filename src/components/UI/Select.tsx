import React, { FC } from "react";

interface SelectProps {
  label?: string;
  options: string[];
}

const Select: FC<SelectProps> = ({ label, options, ...props }) => {
  const htmlFor = `${label}-${Math.random()}`;

  return (
    <div className="text-xl">
      <label className="mr-2" htmlFor={htmlFor}>
        {label}
      </label>

      <select className="h-11 w-48 text-black-500/75 " id={htmlFor} {...props}>
        {options.map((option, index) => {
          return (
            <option value={option} key={option + index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
