import React, { KeyboardEvent, FC, useState } from "react";
import books from "../store/books";
import Input from "./UI/Input";
import Select from "./UI/Select";
import { options } from "../helpers/data";

const Search: FC = () => {
  const [value, setValue] = useState<string>("");
  const [sorting, setSorting] = useState<string>(options.sortingBy[0].text);
  const [categories, setCategories] = useState<string>(
    options.categories[0].text
  );

  const onSubmit = (e: KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }

    books.fetchBooks(value, categories, sorting);
  };

  return (
    <div>
      <Input
        className="w-full h-11 text-black-500 p-3"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onSubmit}
      />

      <div className="flex justify-between w-full">
        <Select
          label="Categories"
          onChange={(e) => setCategories(e.target.value)}
          options={options.categories}
        />
        <Select
          label="Sorting by"
          onChange={(e) => setSorting(e.target.value)}
          options={options.sortingBy}
        />
      </div>
    </div>
  );
};

export default Search;
