import { KeyboardEvent, FC, useState } from "react";
import books from "../store/books";
import Input from "./UI/Input";
import Select from "./UI/Select";
import { options } from "../helpers/data";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Button from "./UI/Button";

const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [categories, setCategories] = useState<string>(
    options.categories[0].value
  );
  const [sorting, setSorting] = useState<string>(options.sortingBy[0].value);
  const { bookId } = books.state;
  const navigate = useNavigate();

  const onSearchEnter = (e: KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }

    if (bookId) {
      navigate("/");
    }

    books.clearBooks();
    books.fetchBooks(search, categories, sorting);
  };

  const onSearchClick = () => {
    if (bookId) {
      navigate("/");
    }

    books.clearBooks();
    books.fetchBooks(search, categories, sorting);
  };

  return (
    <div className="w-full">
      <div className="flex mb-3 relative">
        <Input
          data-testid="search-input"
          className="w-full h-11 text-black-500 p-3 rounded"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={onSearchEnter}
          autoFocus
        />
        <Button
          className="bg-search-icon bg-[length:24px_24px] w-[38px] bg-no-repeat bg-center absolute top-0 right-0 bottom-0"
          onClick={onSearchClick}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3">
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

export default observer(Search);
