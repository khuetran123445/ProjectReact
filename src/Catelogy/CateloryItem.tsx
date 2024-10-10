import React from "react";
import { IoMdPhonePortrait } from "react-icons/io";
import { SiSamsung } from "react-icons/si";
import { FaTabletAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
const arr = [
  { id: 1, name: "Điện thoại", icon: <IoMdPhonePortrait /> },
  { id: 2, name: "IPhone", icon: <IoMdPhonePortrait /> },
  { id: 3, name: "Samsung", icon: <SiSamsung /> },
  { id: 4, name: "Tablet", icon: <FaTabletAlt /> },
  { id: 5, name: "Laptop", icon: <FaLaptop /> },
  { id: 6, name: "Đồng hồ", icon: <IoWatchOutline /> },
  { id: 7, name: "Hàng cũ", icon: <BsFillPhoneVibrateFill /> },
  { id: 8, name: "Phụ kiện", icon: <SlScreenSmartphone /> },
  { id: 9, name: "Âm thanh", icon: <IoMdPhonePortrait /> },
  { id: 10, name: "Sửa chữa", icon: <IoMdPhonePortrait /> },
];
const Button = ({ name, icon }: { name: string; icon: React.ReactNode }) => {
  return (
    <div>
      <ul className="flex gap-4 text-[20px] ">
        <li className="p-1">{icon}</li>
        <li>{name}</li>
      </ul>
    </div>
  );
};

const CateloryItem = () => {
  return (
    <div>
      {arr.length > 0 &&
        arr.map((arrs) => {
          return <Button key={arrs.id} name={arrs.name} icon={arrs.icon} />;
        })}
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default CateloryItem;
