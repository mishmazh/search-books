import React, { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import BookListPage from "./pages/BookListPage";
import BookInfoPage from "./pages/BookInfoPage";
import { observer } from "mobx-react-lite";

const App: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BookListPage />} />
        <Route path="/about/:id" element={<BookInfoPage />} />
      </Routes>
    </div>
  );
};

export default observer(App);
