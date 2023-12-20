import axios from "axios";
import { useDispatch } from "react-redux";
import { getSuccess, neueFirma } from "../redux/firmaSlice";

const useFirms = () => {
  const dispatch = useDispatch();

  const alleFirma = async (token:string) => {
    try {
      const veri = await axios.get(
        "https://17106.fullstack.clarusway.com/firms",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
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
     
      alleFirma(token);
    } catch (error) {
      console.error("deleteFirma Error:", error);
    }
  };

  const neueFirm = async ({ values, token }) => {
    
    try {
      const veri = await axios.post(
        `https://17106.fullstack.clarusway.com/firms/`,
        values,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(veri.data,'neurFiemUseFirms')
      dispatch(neueFirma(veri.data));
      alleFirma(token);
    } catch (error) {
      console.log(error);
    }
  };

  return { alleFirma, deleteFirma, neueFirm };
};

export default useFirms;
