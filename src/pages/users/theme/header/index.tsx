import { memo } from "react";

const Header = () => {
  return (
    <div className=" header_top   ">
      <div className="row ">
        <div className="col-6">
          <img
            width={"124px"}
            height={"53px"}
            src="https://demo1.leotheme.com/leo_gstore/images/logo.png "
            alt=""
          />
        </div>
        <div className="col-6 ">
          <ul>
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
