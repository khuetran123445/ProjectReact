import React from "react";

const Image = ({ imge }: { imge: string }) => {
  return (
    <div className="rounded-[20px]">
      <img src={imge} alt="" className="rounded-[20px] py-2" />
    </div>
  );
};

const CaroselImage = () => {
  return (
    <div>
      <Image imge="https://images.pexels.com/photos/1693627/pexels-photo-1693627.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Image imge="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  );
};

export default CaroselImage;
