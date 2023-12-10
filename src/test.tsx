
import './App.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';



const ImageBox = () => (
  <div style={{ border: '2px solid red', padding: '10px', display: 'flex',height:'100vh', justifyContent: 'center', alignItems: 'center' }}>
    <img src="https://stockapp-de7.vercel.app/assets/regi-3MIp6O8O.avif" alt="Your Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
  </div>
);
function Art() {
  return (
    <> 
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    Inventory Management App
      </Typography>
    

    <Grid container style={{ height: '100vh' }}>
      <Grid item xs={6} style={{width:'1200px'}}>
      <ImageBox />
       
      </Grid>
    </Grid>
 
      <Grid item xs={6} style={{display:'flex',flexDirection:'column',marginBottom:'8px',gap:'25px',marginTop:'90px',height: '100vh'}}>
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <TextField id="outlined-basic" label="first Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <Button variant="contained">Signup</Button>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
     Already have anaccount ? Sign in
      </Typography>
      </Grid>
    </Grid>
    </>
   
  );
}

export default Art;