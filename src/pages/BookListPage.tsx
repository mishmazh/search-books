import { FC } from "react";
import BookItem from "../components/BookItem";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import books from "../store/books";
import { IBookItem } from "../models/models";
import Button from "../components/UI/Button";
import Preloader from "../components/UI/Preloader";

const BookListPage: FC = () => {
  const navigate = useNavigate();
  const {
    totalBooksCount,
    bookList,
    pageIndex,
    maxResults,
    isLoading,
    errorMsg,
  } = books.state;

  const loadMoreBooksHandler = () => {
    books.loadMoreBooks();
  };

  const redirectToBookInfo = (id: string) => {
    navigate(`about/${id}`);
  };

  return (
    <div className="flex flex-col items-center p-5">
      {isLoading && <Preloader />}
      {errorMsg && errorMsg}
      <h3 className="text-xl">
        {totalBooksCount > 0 && `Found ${totalBooksCount} results`}
      </h3>

      <div className="flex flex-wrap justify-center sm:gap-[50px] gap-3 mt-10">
        {bookList.map((bookItem: IBookItem, index: number) => (
          <BookItem
            bookItem={bookItem}
            redirectHandler={redirectToBookInfo}
            key={index}
          />
        ))}
      </div>

      {totalBooksCount > pageIndex + maxResults && (
        <>
          <Button
            data-testid="load-more-btn"
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

export default observer(BookListPage);
