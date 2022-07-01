import React, { FC } from "react";

interface BookItemProps {
  redirectToBook: any;
}

const BookItem: FC<BookItemProps> = ({ redirectToBook }) => {
  return (
    <div
      className="bg-grey-500 w-[290px] h-[450px] cursor-pointer"
      onClick={() => redirectToBook("book/1")}
    >
      <img src="" alt="book" />

      <div>Computers</div>
      <div>Node js разработка</div>
      <div>Дэвид Фишер</div>
    </div>
  );
};

export default BookItem;
