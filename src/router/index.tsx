import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import RootLayout from "../layouts/RootLayout";
import Menu from "../pages/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
