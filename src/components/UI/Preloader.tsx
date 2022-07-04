import { FC } from "react";
import preloader from "../../assets/preloader.gif";

const Preloader: FC = () => {
  return <img src={preloader} alt="preloader" />;
};

export default Preloader;
