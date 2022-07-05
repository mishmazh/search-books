import { FC, useEffect } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookInfo from "../components/BookInfo";
import { observer } from "mobx-react-lite";

const SearchBooks: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/:id" element={<BookInfo />} />
      </Routes>
    </div>
  );
};

export default observer(SearchBooks);
