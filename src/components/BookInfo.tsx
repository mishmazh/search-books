import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import books from "../store/books";
import { observer } from "mobx-react-lite";
import not_found_image from "../assets/not-found.jpg";

const BookInfo = () => {
  const { id } = useParams();

  useEffect(() => {
    id && books.openSpecificBook(id);
  }, []);

  const {
    bookItem: { volumeInfo },
  } = books.state;

  return (
    <div className="flex ">
      <div className="bg-grey-500 w-full">
        <img
          src={
            volumeInfo && volumeInfo.imageLinks
              ? volumeInfo.imageLinks.thumbnail
              : not_found_image
          }
          alt="bookItem"
        />
      </div>

      <div className="w-full">
        <div>{volumeInfo && volumeInfo.categories}</div>
        <div>{volumeInfo && volumeInfo.title}</div>
        <div>{volumeInfo && volumeInfo.authors}</div>
        <div>{volumeInfo && volumeInfo.description}</div>
      </div>
    </div>
  );
};

export default observer(BookInfo);
