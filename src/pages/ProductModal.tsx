import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";

import Select from "@mui/material/Select";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";

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

const ProductModal = ({ open, handleClose, inp, setInp, token,products }) => {
  const { neuePro } = useProducts();
 
  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };

  const deneme = (e) => {
    e.preventDefault();
    console.log(inp, "productChange");
    neuePro({ values: inp, token: token });
    handleClose();
    setInp({
      categoryId: "",
      brandId: "",
      name: "",
    });
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={deneme}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="categoryId"
                value={inp.categoryId}
                label="Category"
                onChange={handleChange}
              >
                {products?.data?.map((item) => (
                  <MenuItem value={item.categoryId._id}>
                    {item.categoryId.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inp.brandId}
                name="brandId"
                label="Category"
                onChange={handleChange}
              >
                {products?.data?.map((item) => (
                  <MenuItem value={item.brandId._id}>
                    {item.brandId.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="outlined-basic"
              label="ProductName *"
              variant="outlined"
              value={inp.name}
              name="name"
              onChange={handleChange}
            ></TextField>
          </Box>
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => {
              deneme(e), handleClose();
            }}
          >
            Create Product
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductModal;
