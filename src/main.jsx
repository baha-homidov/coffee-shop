import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Menu from "./routes/menu.jsx";
import LoyaltySystem from "./routes/loyalty-system.jsx";
import SignUp from "./routes/sign-up.jsx";
import PhoneNumber from "./routes/phone-number.jsx";
import PaymentCode from "./routes/payment-code.jsx";
import Bonus from "./routes/Bonus.jsx";
import Pay from "./routes/pay.jsx";
import Fail from "./routes/fail.jsx";
import CountDown from "./routes/countdown.jsx";
import OrderReady from "./routes/order-ready.jsx";
import OrderFail from "./routes/order-fail.jsx";
import Account from "./routes/account.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/menu",
    element: <Menu />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/loyalty-system",
    element: <LoyaltySystem />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/phone-number-sign-in",
    element: <PhoneNumber title="Вход" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/phone-number-sign-up",
    element: <PhoneNumber title="Регистрация" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/phone-number-verification",
    element: <PaymentCode />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bonus",
    element: <Bonus />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pay",
    element: <Pay />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fail",
    element: <Fail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/countdown",
    element: <CountDown />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/order-ready",
    element: <OrderReady />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/order-fail",
    element: <OrderFail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/account",
    element: <Account />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
