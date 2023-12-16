
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { neueFirma } from "../redux/firmaSlice";


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

const FirmsModal = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state=>state.user)
    console.log(data?.token,'firmmodal')

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   const [inp,setInp] = useState({name:'',adress:'',phone:'',image:''})

     const deneme = (e)=>{
        setInp({ ...inp, [e.target.name]: e.target.value });
        console.log(inp)
        dispatch(neueFirma({values:inp, token:data?.token}))
      
       
  }



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
        
          <TextField id="outlined-basic" label="Firma Name *" variant="outlined" name="name" onChange={deneme}/>
          <TextField id="outlined-basic" label="Adress *" variant="outlined" name="adress" onChange={deneme} />
          <TextField id="outlined-basic" label="Phone *" variant="outlined" name="phone" onChange={deneme}/>
          <TextField id="outlined-basic" label="Image *" variant="outlined" name="image" onChange={deneme}/>
          <Button variant="contained" onClick={()=>deneme,handleClose}>Create Firma </Button>
        </Box>
      </Modal>



    </div>
  )
}

export default FirmsModal