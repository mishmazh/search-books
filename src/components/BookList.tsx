import { FC } from "react";
import BookItem from "./BookItem";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import books from "../store/books";
import { IBookItem } from "../types";

const BookList: FC = () => {
  const navigate = useNavigate();
  const { totalBooksCount, bookList, pageIndex, maxResults } = books.state;

  const loadMoreBooksHandler = () => {
    books.loadMoreBooks();
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h3 className="text-xl">
        {totalBooksCount > 0 && `Found ${totalBooksCount} results`}
      </h3>

      <div className="flex flex-wrap justify-center gap-[50px] mt-10">
        {bookList.map((bookItem: IBookItem, index: number) => (
          <BookItem
            bookItem={bookItem}
            redirectHandler={navigate}
            key={index}
          />
        ))}
      </div>

      {totalBooksCount > pageIndex + maxResults && (
        <button className="mt-6" onClick={loadMoreBooksHandler}>
          Load more
        </button>
      )}
    </div>
  );
};

export default observer(BookList);
