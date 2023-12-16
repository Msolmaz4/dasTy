import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; 
import { alleFirma } from "../redux/firmaSlice";
import FirmaCard from "./FirmaCard";
import { Button, Typography } from "@mui/material";

const Firms =  () => {


  const { data } =  useSelector((state:RootState) => state.user);
  console.log(data, "user");
const dispatch = useDispatch();
  const { veri } = useSelector((state:RootState) => state.firma);
  console.log(veri, "firmaveri");




  

  useEffect(() => {

    dispatch(alleFirma(data?.token));
   
  }, [dispatch]); 

  return (
    <div>   
      <Typography gutterBottom variant="h5" component="div">
    Brands
  </Typography>
<Button variant="contained">Firma</Button>
      <div style={{ display: "flex", justifyContent: "center" }}> Firms</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {veri?.data.map((item, index) => (
          <FirmaCard key={index} item={item} token={data?.token} />
        ))}
      </div>
    </div>
  );
};

export default Firms;
