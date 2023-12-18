import axios from "axios";
import { useDispatch } from "react-redux";
import { getSuccess } from "../redux/firmaSlice";

const useFirms = () => {
  const dispatch = useDispatch();

  const alleFirma = async (token) => {
    try {
      const veri = await axios.get("https://17106.fullstack.clarusway.com/firms", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log("alleFirma", veri);
      dispatch(getSuccess(veri.data));
    } catch (error) {
      console.error("alleFirma Error:", error);
    }
  };

  const deleteFirma = async ({ id, token }) => {
    try {
      await axios.delete(`https://17106.fullstack.clarusway.com/firms/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log("Firma başarıyla silindi.");
      alleFirma(token);
    } catch (error) {
      console.error("deleteFirma Error:", error);
    }
  };

  return { alleFirma, deleteFirma };
};

export default useFirms;
