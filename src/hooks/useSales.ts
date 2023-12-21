import axios from "axios";
import { useDispatch } from "react-redux";
import { getSales } from "../redux/saleSlice";


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

      console.log(prod, "prod");
      dispatch(getSales(prod.data.data));
    } catch (error) {
      console.error("alleFirma Error:", error);
    }
  };

  

  return { alleSales,  };
};

export default useSales;