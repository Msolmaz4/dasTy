import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; 
import { alleFirma } from "../redux/firmaSlice";
import FirmaCard from "./FirmaCard";
import FirmsModal from "./FirmsModal";


const Firms =  () => {


  const { data } =  useSelector((state:RootState) => state.user);
  console.log(data?.token, "user");
const dispatch = useDispatch();
  const { veri } = useSelector((state:RootState) => state.firma);
  console.log(veri, "firmaveri");




  

  useEffect(() => {

    dispatch(alleFirma(data?.token));
   
  }, [dispatch]); 

  return (
    <div>   
   <FirmsModal/>
      <div style={{ display: "flex", justifyContent: "center" }}> Firms</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {veri?.data?.map((item, index) => (
          <FirmaCard key={index} item={item} token={data?.token} />
        ))}
      </div>
    </div>
  );
};

export default Firms;
