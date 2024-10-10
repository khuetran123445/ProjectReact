import { memo } from "react";
import CateloryItem from "../../../Catelogy/CateloryItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from "../../../Catelogy/Carosel";
import CaroselImage from "../../../Catelogy/CaroselImg";

const HomePage = () => {
  return (
    <div>
      <div className="body_container h-screen py-7 ">
        <div className="body_leftRight flex gap-[20px]   ">
          <div className="body body_left w-[20%] ">
            <div className="menu_category">
              <CateloryItem />
            </div>
          </div>
          <div className=" body_image w-[50%] ">
            <Carosel />
          </div>
          <div className=" body_right w-[30%] ">
            <CaroselImage />
          </div>
        </div>
        <div className="body_content w-full bg-yellow-300">conten</div>
      </div>
    </div>
  );
};

export default memo(HomePage);
