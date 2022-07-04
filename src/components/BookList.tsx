import { FC } from "react";
import BookItem from "./BookItem";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import books from "../store/books";
import { IBookItem } from "../types";
import Button from "./UI/Button";
import Preloader from "./UI/Preloader";

const BookList: FC = () => {
  const navigate = useNavigate();
  const { totalBooksCount, bookList, pageIndex, maxResults, isLoading } =
    books.state;

  const loadMoreBooksHandler = () => {
    books.loadMoreBooks();
  };

  return (
    <div className="flex flex-col items-center p-5">
      {isLoading && <Preloader />}
      <h3 className="text-xl">
        {totalBooksCount > 0 && `Found ${totalBooksCount} results`}
      </h3>

      <div className="flex flex-wrap justify-center sm:gap-[50px] gap-3 mt-10">
        {bookList.map((bookItem: IBookItem, index: number) => (
          <BookItem
            bookItem={bookItem}
            redirectHandler={navigate}
            key={index}
          />
        ))}
      </div>

      {totalBooksCount > pageIndex + maxResults && (
        <>
          <Button
            className="btn-primary mt-10 "
            onClick={loadMoreBooksHandler}
            disabled={isLoading}
          >
            Load more
          </Button>
          {isLoading && <Preloader />}
        </>
      )}
    </div>
  );
};

export default observer(BookList);
