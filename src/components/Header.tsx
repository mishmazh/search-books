import React, { FC } from "react";
import Backdrop from "./UI/Backdrop";
import Input from "./UI/Input";
import Select from "./UI/Select";
import { options } from "../helpers/data";

const Header: FC = () => {
  return (
    <header className="h-[270px] relative">
      <Backdrop />
      <div className="bg-header-image bg-cover h-full text-white-500 grid place-items-center ">
        <div className="absolute w-1/2 grid place-items-center gap-5">
          <h1 className="text-5xl font-bold">Search for Books</h1>
          <Input placeholder="Search..." />

          <div className="flex justify-between w-full">
            <Select label="Categories" options={options.categories} />
            <Select label="Sorting by" options={options.sortingBy} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
