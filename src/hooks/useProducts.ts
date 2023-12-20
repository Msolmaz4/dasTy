import axios from "axios";
import { useDispatch } from "react-redux";
import { getProSuccess, neueProduct } from "../redux/productSlice";

export interface productSta {
  id: string;
  token: string;
  error: string;
}

const useProducts = () => {
  const dispatch = useDispatch();
  const allePro = async (token: string) => {
    try {
      const prod = await axios.get(
        "https://17106.fullstack.clarusway.com/products/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      console.log(prod, "prod");
      dispatch(getProSuccess(prod.data));
    } catch (error) {
      console.error("alleFirma Error:", error);
    }
  };

  const deletePro = async ({ id, token }: productSta) => {
    console.log(id, token, "detelpro");
    try {
      await axios.delete(
        `https://17106.fullstack.clarusway.com/products/${id}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("Firma başarıyla silindi.");
      allePro(token);
    } catch (error) {
      console.error("deleteFirma Error:", error);
    }
  };

  const neuePro = async ({ values, token }) => {
    console.log(values, token, "neuProduct");
    try {
      const veri = await axios.post(
        `https://17106.fullstack.clarusway.com/products/`,
        values,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      dispatch(neueProduct(veri.data));
      allePro(token);
    } catch (error) {
      console.log(error);
    }
  };

  return { allePro, deletePro, neuePro };
};

export default useProducts;
