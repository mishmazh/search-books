import React, { FC, useEffect } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import { Route, Routes } from "react-router-dom";
import BookInfo from "../components/BookInfo";
import books from "../store/books";
import { observer } from "mobx-react-lite";

const SearchBooks: FC = () => {
  useEffect(() => {
    books.fetchBooks();
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<BookList bookList={books.state.bookList} />}
        />
        <Route path="book/:id" element={<BookInfo />} />
      </Routes>
    </div>
  );
};

export default observer(SearchBooks);
