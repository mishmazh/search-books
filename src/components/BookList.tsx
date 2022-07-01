import React from "react";
import BookItem from "./BookItem";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="font-bold text-xl">Found 446 results</h3>

      <div className="flex flex-wrap justify-center gap-[50px] mt-10">
        {[1, 2, 3, 4].map((book, index) => (
          <BookItem redirectToBook={navigate} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
