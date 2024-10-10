import Header from "../header";
import Footer from "../footter";
import { memo } from "react";

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default memo(MasterLayout);
