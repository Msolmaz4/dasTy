import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; 

import FirmaCard from "./FirmaCard";
import FirmsModal from "./FirmsModal";
import useFirms from "../hooks/useFirms";


const Firms =  () => {

const {alleFirma} = useFirms()
  const { data } =  useSelector((state:RootState) => state.user);
  console.log(data?.token, "user");

  const { veri } = useSelector((state:RootState) => state.firma);
  console.log(veri, "firmaveri");




  

  useEffect(() => {
alleFirma(data?.token)
   // dispatch(alleFirma(data?.token));
   
  }, [veri]); 

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
