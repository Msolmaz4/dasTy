import { Box, Button, Modal, TextField } from "@mui/material";

import { useSelector } from "react-redux";
import useFirms from "../hooks/useFirms";

import InputMask from "react-input-mask";

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

const FirmsModal = ({ open, handleOpen, handleClose, inp, setInp }) => {
  const { data } = useSelector((state) => state.user);
  const { neueFirm } = useFirms();

  const handleC = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };
  const deneme = async(e) => {
    e.preventDefault();
     console.log(inp,"inp",data?.token,"inpppppppppppppp")
    await neueFirm({values:inp,token:data?.token} );
     await handleClose();
    setInp({
      name: "",
      adress: "",
      phone: "",
      image: "",
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
            <TextField
              id="outlined-basic"
              label="Firma Name *"
              variant="outlined"
              name="name"
              onChange={handleC}
            />
            <TextField
              id="outlined-basic"
              label="Adress *"
              variant="outlined"
              name="address"
              onChange={handleC}
            />

            <TextField
              id="outlined-basic"
              label="Phone *"
              variant="outlined"
              name="phone"
              onChange={handleC}
              {...(inp.phone ? { value: inp.phone } : {})}
              InputProps={{
                inputComponent: InputMask,
                inputProps: {
                  mask: "+49/999/99999999",
                },
              }}
            />
            <TextField
              id="outlined-basic"
              label="Image *"
              variant="outlined"
              name="image"
              onChange={handleC}
            >
         
            </TextField>
          </Box>
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => {
              deneme(e), handleClose();
            }}
          >
            Create Firma{" "}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default FirmsModal;
