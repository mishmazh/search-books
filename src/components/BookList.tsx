import React, { FC } from "react";
import BookItem from "./BookItem";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

interface BookListProps {
  bookList: any;
}

const BookList: FC<BookListProps> = ({ bookList }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="font-bold text-xl">Found 446 results</h3>

      <div className="flex flex-wrap justify-center gap-[50px] mt-10">
        {bookList.map((bookItem: any, index: number) => (
          <BookItem bookItem={bookItem} redirectToBook={navigate} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
