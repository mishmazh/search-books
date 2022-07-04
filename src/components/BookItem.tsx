import { FC } from "react";
import { IBookItem } from "../types";
import not_found_image from "../assets/not-found.jpg";

interface BookItemProps {
  bookItem: IBookItem;
  redirectHandler: (id: string) => void;
}

const BookItem: FC<BookItemProps> = ({ bookItem, redirectHandler }) => {
  const {
    id,
    volumeInfo: { imageLinks, categories, title, authors },
  } = bookItem;

  // console.log(authors);

  return (
    <div
      className="bg-grey-500 w-[290px] cursor-pointer rounded"
      onClick={() => redirectHandler(id)}
    >
      <div className="grid place-items-center h-[275px]">
        <img
          className="book-shadow w-[135px]"
          src={imageLinks ? imageLinks.thumbnail : not_found_image}
          alt="bookItem"
        />
      </div>

      <div className="flex flex-col gap-2 px-6 pb-5">
        <div className="text-black-500/50 text-sm underline">
          {categories && categories[0]}
        </div>
        <div className="font-bold">{title}</div>
        <div className="text-sm text-black-500/50">{authors}</div>
      </div>
    </div>
  );
};

export default BookItem;
