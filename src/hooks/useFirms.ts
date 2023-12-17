import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuccess } from "../redux/firmaSlice";




const useFirms = () => {

 const {token} = useSelector(state=>state.user)
 const dispatch = useDispatch()

   const alleFirma = async () => {
    const veri = await axios.get("https://17106.fullstack.clarusway.com/firms", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log("alleFirma", veri);
      dispatch(getSuccess(veri.data))  ;
  };

  return alleFirma;
};

export default useFirms;
