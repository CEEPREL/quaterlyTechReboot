import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import RegisterPage from "../Pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/registration",
    element: <RegisterPage />,
  },
]);
