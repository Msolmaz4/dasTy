import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FirmaCard from "./FirmaCard";
import FirmsModal from "./FirmsModal";
import useFirms from "../hooks/useFirms";
import { Button, Typography } from "@mui/material";

const Firms = () => {
  const { alleFirma } = useFirms();

  const { data } = useSelector((state: RootState) => state.user);
  const { veri } = useSelector((state: RootState) => state.firma);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inp, setInp] = useState({
    name: "",
    adress: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    alleFirma(data?.token);
    // dispatch(alleFirma(data?.token));
  }, []);
  console.log(veri?.data, "fimrs");

  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        FIRMS
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Firms
      </Button>
      <FirmsModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        inp={inp}
        setInp={setInp}
      />
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
          <FirmaCard key={index} item={item} token={data?.token}  />
        ))}
      </div>
    </div>
  );
};

export default Firms;
