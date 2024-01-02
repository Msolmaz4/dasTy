
import Brands from "../pages/Brands";
import Sigin from "../pages/Sigin";
import Signup from "../pages/Signup";
import Stock from "../pages/Stock";
import Home from "../pages/Home";
import Sales from "../pages/Sales";
import Firms from "../pages/Firms";
import Products from "../pages/Products";
import Purchases from "../pages/Purchases";
import Eroro from "../pages/Eroro";
import { useSelector } from "react-redux";

const useRouten = () => {
  const {data} = useSelector(state=>state.user)

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
      element:   data?.token ? <Stock /> : <Sigin />,
      auth: true,
      children: [
        {
          index: true,
          element: <Home />,
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

  

  return { routes } ;
};

export default useRouten;