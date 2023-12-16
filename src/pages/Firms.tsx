import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; 
import { alleFirma } from "../redux/firmaSlice";
import FirmaCard from "./FirmaCard";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Firms =  () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        FIRMS
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Firms
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
          <TextField id="outlined-basic" label="Firma Name *" variant="outlined" />
          <TextField id="outlined-basic" label="Adress *" variant="outlined" />
          <TextField id="outlined-basic" label="Phone *" variant="outlined" />
          <TextField id="outlined-basic" label="Image *" variant="outlined" />
          <Button variant="contained">Create Firma </Button>
        </Box>
      </Modal>
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
