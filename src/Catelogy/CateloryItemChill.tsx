import React from "react";
import { Link } from "react-router-dom";

// const arrs = [
//   { id: 1, name: "iPhone" },
//   { id: 2, name: "Samsung" },
//   { id: 3, name: "Xiaomi" },
//   { id: 4, name: "Nokia" },
//   { id: 5, name: "Vivo" },
// ];
// const Button = ({
//   name,
//   handleClick,
// }: {
//   name: string;
//   handleClick: () => void;
// }) => {
//   return <div onClick={handleClick}>{name}</div>;
// };

type TChild = {
  id: number;
  name: string;
};

const CateloryItemChill = ({ child }: { child: TChild[] }) => {
  // const handleClick = (name: string) => {
  //   alert({ name });
  // };
  return (
    <div className="cat_child absolute  ">
      {child.length > 0 &&
        child.map((c) => {
          return <Link to={`category/${c.id}`}>{c.name}</Link>;
        })}
    </div>
  );
};

export default CateloryItemChill;
