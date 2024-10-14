import { memo } from "react";
import Inputheader from "./SearchHeader";

const Header = () => {
  return (
    <div className=" header_top mt-4  ">
      <div className="row ">
        <div className="col-3 pl-16  ">
          <img
            width={"124px"}
            height={"53px"}
            src="https://demo1.leotheme.com/leo_gstore/images/logo.png "
            alt=""
          />
        </div>
        <div className="col-9 py-2">
          <ul>
            <li>
              <Inputheader />
            </li>
            <li>Giới thiệu thông tin </li>
            <li>Sản phẩm đã xem</li>
            <li>Tra cứu đơn hàng</li>
            <li>Đăng nhập</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
