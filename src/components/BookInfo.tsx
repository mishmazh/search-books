import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import books from "../store/books";
import { observer } from "mobx-react-lite";

const BookInfo = () => {
  const { id } = useParams();

  useEffect(() => {
    id && books.fetchSpecificBook(id);
  }, []);

  return (
    <div className="flex ">
      <div className="bg-grey-500 w-full">
        <img
          src={
            books.state.book.volumeInfo &&
            books.state.book.volumeInfo.imageLinks.thumbnail
          }
          alt="book"
        />
      </div>

      <div className="w-full">
        <div>
          {books.state.book.volumeInfo &&
            books.state.book.volumeInfo.categories}
        </div>
        <h1>
          {books.state.book.volumeInfo && books.state.book.volumeInfo.title}
        </h1>
        <div>
          {books.state.book.volumeInfo && books.state.book.volumeInfo.authors}
        </div>
        <div>
          {books.state.book.volumeInfo &&
            books.state.book.volumeInfo.description}
        </div>
      </div>
    </div>
  );
};

export default observer(BookInfo);
