import axios from "axios";
import { useDispatch } from "react-redux";
import { getSuccess,  } from "../redux/firmaSlice";

interface Itok {
  id:string | number,
  token:string,
  values:string[]
}


const useFirms = () => {
  const dispatch = useDispatch();

  const alleFirma = async (token: string) => {
    try {
      const veri = await axios.get(
        "https://17106.fullstack.clarusway.com/firms",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("alleFirma", veri.data.data);
      dispatch(getSuccess(veri.data.data));
    } catch (error) {
      console.error("alleFirma Error:", error);
    }
  };

  const deleteFirma = async ({ id, token }:Itok) => {
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

  const neueFirm = async ( {values, token } :Itok) => {
    console.log(values,'neuFirma')
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
      console.log(veri.data, "neurFiemUseFirms");
      //dispatch(neueFirma(veri?.data));
    await alleFirma(token);
    } catch (error) {
      console.log(error);
    }
  };

  const updatefirma = async ( id :string |number, token:string,values:string[]) => {
    console.log(id, values, token, "updateFirma");
    try {
      const veri = await axios.patch(
        `https://17106.fullstack.clarusway.com/firms/${id}`,
        values,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(veri.data, "neurFiemUseFirms");
     // dispatch(updateFirma(veri.data));
      alleFirma(token);
    } catch (error) {
      console.log(error);
    }
  };

  return { alleFirma, deleteFirma, neueFirm, updatefirma };
};

export default useFirms;
