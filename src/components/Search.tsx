import React, { KeyboardEvent, FC, useState } from "react";
import books from "../store/books";
import Input from "./UI/Input";
import Select from "./UI/Select";
import { options } from "../helpers/data";

const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [categories, setCategories] = useState<string>(
    options.categories[0].value
  );
  const [sorting, setSorting] = useState<string>(options.sortingBy[0].value);

  const onSubmit = (e: KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }

    books.clearBooks();

    if (search !== "") {
      books.fetchBooks(search, categories, sorting);
    }
  };

  return (
    <div className="w-full">
      <Input
        className="w-full h-11 text-black-500 p-3 mb-4 rounded"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={onSubmit}
      />

      <div className="flex justify-center gap-3">
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
