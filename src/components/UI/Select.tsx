import { ChangeEvent, FC } from "react";

interface IOption {
  text: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: IOption[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ label, options, ...props }) => {
  const htmlFor = `${label}-${Math.random()}`;

  return (
    <div className="text-sm">
      <label className="mr-2" htmlFor={htmlFor}>
        {label}
      </label>

      <select
        className="h-8 w-48 text-black-500/75 border rounded"
        id={htmlFor}
        {...props}
      >
        {options.map((option, index: number) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
