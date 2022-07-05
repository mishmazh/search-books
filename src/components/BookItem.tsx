import { FC } from "react";
import { IBookItem } from "../store/types";
import not_found_image from "../assets/not-found.jpg";

interface BookItemProps {
  bookItem: IBookItem;
  redirectHandler: (id: string) => void;
}

const BookItem: FC<BookItemProps> = ({ bookItem, redirectHandler }) => {
  const { id, volumeInfo } = bookItem;

  return (
    <div
      data-testid="book-item"
      className="bg-grey-500 w-[290px] cursor-pointer rounded"
      onClick={() => redirectHandler(id)}
    >
      <div className="grid place-items-center h-[275px]">
        <img
          className="book-shadow w-[135px]"
          src={
            volumeInfo.imageLinks
              ? volumeInfo.imageLinks.thumbnail
              : not_found_image
          }
          alt="bookItem"
        />
      </div>

      <div className="flex flex-col gap-2 px-6 pb-5">
        <div className="text-black-500/50 text-sm underline">
          {volumeInfo.categories && volumeInfo.categories[0]}
        </div>
        <div className="font-bold">{volumeInfo.title}</div>
        <div className="text-sm text-black-500/50">{volumeInfo?.authors}</div>
      </div>
    </div>
  );
};

export default BookItem;
