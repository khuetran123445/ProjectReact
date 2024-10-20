import React from "react";
import { Link } from "react-router-dom";

const arr = [
  { id: 1, name: "Về Chúng Tôi" },
  { id: 2, name: "Chính sách bảo mật thông tin" },
  { id: 3, name: "Giới thiệu" },
  { id: 4, name: "Điều khoản sử dụng" },
  { id: 5, name: "Hỗ trợ khách hàng" },
  { id: 6, name: "Chính sách đổi trả hàng" },
  { id: 7, name: "Chính sách bảo hành" },
  { id: 8, name: "Phương thức Giao hàng & thanh toán" },
];

const Letter = ({ name }: { name: string }) => {
  return <div className=" Footer ">{name}</div>;
};
const Footer = () => {
  return (
    <div>
      {arr.length > 0 &&
        arr.map((arrs) => {
          return (
            <Link to={`/footer`} key={arrs.id}>
              <Letter name={arrs.name} />
            </Link>
          );
        })}
    </div>
  );
};

export default Footer;
