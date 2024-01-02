import axios from "axios";
import { useDispatch } from "react-redux";
import { getSales, getdeletSales } from "../redux/saleSlice";

export interface productSta {
  id: string;
  token: string;
  error: string;
}

const useSales = () => {
  const dispatch = useDispatch();
  const alleSales = async (token: string) => {
    try {
      const prod = await axios.get(
        "https://17106.fullstack.clarusway.com/sales/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

    
      dispatch(getSales(prod.data.data));
    } catch (error) {
      console.error("alleFirma Error:", error);
    }
  };
  const deletSales = async ({ id, token }:productSta) => {
    try {
      const prod = await axios.delete(
        ` https://17106.fullstack.clarusway.com/sales/${id}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

    
      dispatch(getdeletSales(prod.data.data));
      alleSales(token);
    } catch (error) {
      console.error("alleFirma Error:", error);
    }
  };

  return { alleSales, deletSales };
};

export default useSales;
