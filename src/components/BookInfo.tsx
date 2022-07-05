import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import books from "../store/books";
import { observer } from "mobx-react-lite";
import not_found_image from "../assets/not-found.jpg";
import Button from "./UI/Button";
import Preloader from "./UI/Preloader";

const BookInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    bookItem: { volumeInfo },
    isLoading,
  } = books.state;

  useEffect(() => {
    id && books.openSpecificBook(id);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="md:flex md:flex-row flex flex-col-reverse">
      <div className="md:w-2/5">
        <div className="md:p-10 p-5 bg-grey-500">
          <img
            className="book-shadow"
            src={
              volumeInfo?.imageLinks
                ? volumeInfo.imageLinks.extraLarge
                : not_found_image
            }
            alt="bookItem"
          />
        </div>
      </div>

      <div className="md:w-3/5 md:p-9 p-5">
        <Button className="btn-primary mb-5" onClick={() => navigate("/")}>
          Back
        </Button>

        <div className="text-sm text-black-500/80 mb-7">
          {volumeInfo?.categories}
        </div>
        <div className="text-2xl font-bold mb-3">{volumeInfo?.title}</div>
        <div className="text-sm text-black-500/75 mb-6 underline">
          {volumeInfo?.authors}
        </div>

        {volumeInfo?.description && (
          <div className="border border-grey-500 p-3 text-sm">
            {volumeInfo.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(BookInfo);
