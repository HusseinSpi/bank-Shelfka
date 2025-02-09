import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Add from "./pages/Add";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Savings from "./pages/Savings";
import Transactions from "./pages/Transactions";
import EmailVerification from "./pages/EmailVerification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/savings",
    element: <Savings />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/email-verification",
    element: <EmailVerification />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
