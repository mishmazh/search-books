import { FC } from "react";
import Backdrop from "./UI/Backdrop";
import Search from "./Search";

const Header: FC = () => {
  return (
    <header className="sm:h-[270px] h-[360px] relative">
      <Backdrop />
      <div className="bg-header-image bg-cover h-full text-white-500 grid place-items-center ">
        <div className="absolute grid place-items-center m-5">
          <h1 className="text-5xl mb-3">Search for Books</h1>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
