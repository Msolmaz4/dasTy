import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
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
const DeatailModal = ({name}) => {

    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
         <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
        
          >
            <TextField
              id="outlined-basic"
              label="Firma Name *"
              variant="outlined"
              name="name"
             
           
            />
            <TextField
              id="outlined-basic"
              label="Adress *"
              variant="outlined"
              name="adress"
              
            />
            <TextField
              id="outlined-basic"
              label="Phone *"
              variant="outlined"
              name="phone"
             
            />
            <TextField
              id="outlined-basic"
              label="Image *"
              variant="outlined"
              name="image"
           
            />
            <Button
              type="submit"
              variant="contained"
            
            >
              Updatae{" "}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
    </div>
  )
}

export default DeatailModal