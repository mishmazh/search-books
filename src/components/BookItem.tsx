import { observer } from "mobx-react-lite";
import React, { FC } from "react";

interface BookItemProps {
  redirectToBook: any;
  bookItem: any;
}

const BookItem: FC<BookItemProps> = ({ redirectToBook, bookItem }) => {
  return (
    <div
      className="bg-grey-500 w-[290px] h-[450px] cursor-pointer"
      onClick={() => redirectToBook(`book/${bookItem.id}`)}
    >
      <img
        src={
          bookItem.volumeInfo.imageLinks &&
          bookItem.volumeInfo.imageLinks.thumbnail
        }
        alt="book"
      />

      <div>
        {bookItem.volumeInfo.categories && bookItem.volumeInfo.categories[0]}
      </div>
      <div>{bookItem.volumeInfo.title}</div>
      <div>{bookItem.volumeInfo.authors}</div>
    </div>
  );
};

export default BookItem;
