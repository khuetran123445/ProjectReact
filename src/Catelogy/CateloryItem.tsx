import { IoMdPhonePortrait } from "react-icons/io";
import { SiSamsung } from "react-icons/si";
import { FaTabletAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";

import CateloryItemChill from "./CateloryItemChill";
import { Link } from "react-router-dom";

const arrs = [
  {
    id: 1,
    name: "Điện thoại",
    icon: <IoMdPhonePortrait />,
    child: [
      { id: 11, name: "Chọn theo hãng" },
      { id: 12, name: "Điện thoại hot" },
    ],
  },
  {
    id: 2,
    name: "IPhone",
    icon: <IoMdPhonePortrait />,
    child: [
      { id: 13, name: "iPhone 16 Series" },
      { id: 14, name: "iPhone 15" },
      { id: 15, name: "iPhone 14 Series" },
      { id: 16, name: "iPhone 14 Series" },
      { id: 17, name: "iPhone 12 Series" },
      { id: 18, name: "iPhone 11 Series" },
    ],
  },
  {
    id: 3,
    name: "Samsung",
    icon: <SiSamsung />,
    child: [
      { id: 19, name: "Samsung A" },
      { id: 20, name: "Samsung B" },
    ],
  },
  {
    id: 4,
    name: "Tablet",
    icon: <FaTabletAlt />,
    child: [
      { id: 21, name: "Ipad Gen 8" },
      { id: 22, name: "Ipad Gen 9" },
      { id: 23, name: "Ipad Gen 10" },
    ],
  },
  {
    id: 5,
    name: "Laptop",
    icon: <FaLaptop />,
    child: [
      { id: 24, name: "Laptop 8" },
      { id: 25, name: "Laptop 9" },
      { id: 26, name: "Laptop 10" },
    ],
  },
  {
    id: 6,
    name: "Đồng hồ",
    icon: <IoWatchOutline />,
    child: [
      { id: 27, name: "Đồng hồ 8" },
      { id: 28, name: "Đồng hồ 9" },
      { id: 29, name: "Đồng hồ 10" },
    ],
  },
  {
    id: 7,
    name: "Hàng cũ",
    icon: <BsFillPhoneVibrateFill />,
    child: [
      { id: 30, name: "Hàng cũ 8" },
      { id: 31, name: "Hàng cũ 9" },
      { id: 32, name: "Hàng cũ 10" },
    ],
  },
  {
    id: 8,
    name: "Phụ kiện",
    icon: <SlScreenSmartphone />,
    child: [
      { id: 33, name: "Phụ kiện Apple" },
      { id: 34, name: "Phụ kiện Samsung" },
      { id: 35, name: "Phụ kiện Ipad" },
    ],
  },
  {
    id: 9,
    name: "Âm thanh",
    icon: <IoMdPhonePortrait />,
    child: [
      { id: 36, name: "Airpods 8" },
      { id: 37, name: "Airpods 9" },
      { id: 38, name: "Airpods 10" },
    ],
  },
  {
    id: 10,
    name: "Sửa chữa",
    icon: <IoMdPhonePortrait />,
    child: [
      { id: 39, name: "Thay kính" },
      { id: 40, name: " Thay pin" },
      { id: 41, name: "Thay chân sạc" },
    ],
  },
];

const Item = ({ icon, name }: { name: string; icon: React.ReactNode }) => {
  return (
    <div className={`${"p-1 gap-2 flex  CateloryItemColor "} `}>
      {icon}
      {name}
    </div>
  );
};

const CateloryItem = () => {
  return (
    <>
      {arrs.length > 0 &&
        arrs.map((arr) => {
          return (
            <div className="cat_item">
              <Link to={`/khue/${arr.id}`}>
                <Item key={arr.id} name={arr.name} icon={arr.icon} />
              </Link>
              {arr?.child && arr?.child.length > 0 && (
                <CateloryItemChill child={arr.child || []} />
              )}
            </div>
          );
        })}
    </>
  );
};

export default CateloryItem;
