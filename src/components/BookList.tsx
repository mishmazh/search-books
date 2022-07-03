import React, { FC } from "react";
import BookItem from "./BookItem";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import books from "../store/books";

interface BookListProps {
  state: any;
}

const BookList: FC<BookListProps> = ({ state: { totalBooks, bookList } }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="font-bold text-xl">
        {totalBooks > 0 && `Found ${totalBooks} results`}
      </h3>

      <div className="flex flex-wrap justify-center gap-[50px] mt-10">
        {bookList.map((bookItem: any, index: number) => (
          <BookItem
            bookItem={bookItem}
            redirectToBook={navigate}
            key={bookItem.id}
          />
        ))}

        {books.state.isButton && (
          <button onClick={() => books.loadMoreBooks()}>Load more</button>
        )}
      </div>
    </div>
  );
};

export default observer(BookList);
