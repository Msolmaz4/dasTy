import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import useFirms from '../hooks/useFirms';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const DeatailModal = ({name,address,image,phone,id,token}) => {
const {updatefirma} = useFirms()
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [inp, setInp] = useState({
      name: name,
      address: address,
      phone: phone,
      image: image,
    });

    const handleC = (e) => {
      setInp({ ...inp, [e.target.name]: e.target.value });
    };
    const deneme = async(e) => {
      e.preventDefault();
     await updatefirma({id:id,token:token ,values:inp})
      handleClose()
    };


  return (
    <div>
         <div>
      <Button onClick={handleOpen}>Update</Button>
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
              value={inp.name}
              onChange={handleC}
             
           
            />
            <TextField
              id="outlined-basic"
              label="Adress *"
              variant="outlined"
              name="address"
              value={inp.address}
              onChange={handleC}
            />
            <TextField
              id="outlined-basic"
              label="Phone *"
              variant="outlined"
              name="phone"
              value={inp.phone}
              onChange={handleC}
            />
            <TextField
              id="outlined-basic"
              label="Image *"
              variant="outlined"
              name="image"
              value={inp.image}
              onChange={handleC}
            />
            <Button
              type="submit"
              variant="contained"
            
            >
              Updatae
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
    </div>
  )
}

export default DeatailModal