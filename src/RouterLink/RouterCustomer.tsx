import { ROUTERS } from "./RouterLink";
import HomePage from "../pages/users/HomePage";
import { Route, Routes } from "react-router-dom";

import MasterLayout from "../pages/users/theme/Body";

const renderUserRourter = () => {
  const userRouter = [
    {
      path: ROUTERS.Link.HOME,
      Component: <HomePage />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key: number) => (
          <Route key={key} path={item.path} element={item.Component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustomer = () => {
  return renderUserRourter();
};

export default RouterCustomer;
