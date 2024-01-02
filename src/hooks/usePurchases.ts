import axios from "axios";
import { useDispatch } from "react-redux";
import { getPur } from "../redux/purchasesSlice";



export interface purctSta {
  id: string;
  token: string;
  error: string;
}

const usePurchases = () => {
  const dispatch = useDispatch();
  const allePurchases = async (token: string) => {
    try {
      const prod = await axios.get(
        "https://17106.fullstack.clarusway.com/purchases/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      
      dispatch(getPur(prod.data.data));
    } catch (error) {
      console.error("alleFirma Error:", error);
    }
  };

  

  return { allePurchases,  };
};

export default usePurchases;