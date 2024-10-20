import { ROUTERS } from "./RouterLink";
import HomePage from "../pages/users/HomePage";
import { Route, Routes } from "react-router-dom";

import MasterLayout from "../pages/users/theme/Body/MasterLayOut";

import OrderPage from "../pages/users/theme/Body/OrderPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OrderNow from "../pages/users/theme/Body/OrderNow";
const queryClient = new QueryClient();
const renderUserRourter = () => {
  const userRouter = [
    {
      path: ROUTERS.Link.HOME,
      Component: <HomePage />,
    },
    {
      path: ROUTERS.LinkOrderPage.OrderPage,
      Component: (
        <QueryClientProvider client={queryClient}>
          <OrderPage />
        </QueryClientProvider>
      ),
    },
    {
      path: ROUTERS.LinkOrderNow.OrderNow,
      Component: (
        <QueryClientProvider client={queryClient}>
          <OrderNow />
        </QueryClientProvider>
      ),
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
