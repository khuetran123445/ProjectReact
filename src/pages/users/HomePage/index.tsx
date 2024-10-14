import { memo } from "react";
import CateloryItem from "../../../Catelogy/CateloryItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from "../../../Catelogy/Carosel";
import CaroselImage from "../../../Catelogy/CaroselImg";

const HomePage = () => {
  return (
    <div className="body_container p-3 h-[500px] ">
      <div className="body_left flex gap-3 ">
        <div className=" w-[200px]   menu_category   ">
          <CateloryItem />
        </div>

        <div className="body_between w-[600px]   flex gap-3 ">
          <div className="  w-[700px] ">
            <Carosel />
          </div>

          <div className=" body_right w-[30px] ">
            <CaroselImage />
          </div>
        </div>
      </div>
      <div className="body_content w-full bg-yellow-300">conten</div>
    </div>
  );
};

export default memo(HomePage);
