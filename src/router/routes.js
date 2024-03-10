import Home from "../pages/Home";
import LogIn from "../pages/LogIn";

import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: LayOut } = require("../LayOut");

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
