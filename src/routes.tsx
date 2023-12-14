import Sigin from "./pages/Sigin";
import Signup from "./pages/Signup";
import Eroro from "./pages/Eroro";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Stock from "./pages/Stock";
import Firms from "./pages/Firms";
import Brands from "./pages/Brands";
import Products from "./pages/Products";
import Purchases from "./pages/Purchases";








const routes = [
  {
    path: "/",
    element: <Sigin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "stock",
    element: <Stock/> ,
    auth: true,
    children: [
      {
        index: true,
        element: <Home/>,
      },

      {
        path: "sales",
        element: <Sales />,
      },
      {
        path: "firms",
        element: <Firms />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "purchases",
        element: <Purchases />,
      },
    ],
  },
  {
    path: "*",
    element: <Eroro />,
  },
];

export default routes;
