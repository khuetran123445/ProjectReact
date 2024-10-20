import { memo } from "react";
import CateloryItem from "../../../Catelogy/CateloryItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from "../../../Catelogy/Carosel";
import BodyContent from "../theme/Body/BodyContent";

const HomePage = () => {
  return (
    <>
      <div className="flex w-[800px] h-[400px] m-4">
        <div className="menu_category w-[150px] bg-red-400">
          <CateloryItem />
        </div>
        <div className="image w-[580px] ml-3">
          <Carosel />
        </div>
      </div>
      <div className="container">
        <BodyContent />
      </div>
    </>
  );
};

export default memo(HomePage);
