import React from "react";

const Image = ({ image }: { image: string }) => {
  return (
    <div className="rounded-[20px] p-1 ">
      <img src={image} alt="" className="rounded-[20px] " />
    </div>
  );
};

const CaroselImage = () => {
  return (
    <div className="w-[180px] h-[90px] ">
      <Image image="https://images.pexels.com/photos/1693627/pexels-photo-1693627.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Image image="https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-110924-060849.jpg" />
    </div>
  );
};

export default CaroselImage;
