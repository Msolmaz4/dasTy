import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BrandsCart from "./BrandsCart";
import Box from "@mui/material/Box";
import { useState } from "react";
import { TextField } from "@mui/material";
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
const Brands = () => {
  const { veri } = useSelector((state: RootState) => state.firma);
  console.log(veri, "bransd");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brands
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button variant="contained">Submit Brands </Button>
        </Box>
      </Modal>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {veri?.data?.map((item) => (
          <div>
            <BrandsCart item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
