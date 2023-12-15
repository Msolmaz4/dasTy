import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alleFirma } from "../redux/firmaSlice";
import FirmaCard from "./FirmaCard";

const Firms =  () => {
  const { data } =  useSelector((state) => state.user);
  console.log(data, "user");

  const dispatch = useDispatch();
  const { veri } = useSelector((state) => state.firma);
  console.log(veri, "firmaveri");

  useEffect(() => {

    dispatch(alleFirma(data?.token));
  }, [dispatch, data]); 

  return (
    <div>
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
