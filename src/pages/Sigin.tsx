import { Button, LinearProgress } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logUser, reset } from "../redux/userSlice";
import React, { useState } from "react";
import { spread } from "axios";


interface Values {
  email: string;
  password: string;
}

const Sigin:React.FC = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const [sprache,setSprache] = useState(true)

  const derleme = () => {
    navi("/signup");
    dispatch(reset());
  };
  return (
    <div >
      <div style={{display:"flex", justifyContent:"flex-end", marginTop:"15px" ,marginRight:"10px"}}>
      <div style={{width:"50px", height:"60px" }}>
        {
          sprache && ( <button onClick={()=>setSprache(!sprache)}>  <img src="/det.jpg" alt="Det" /> </button> )
        }
      
      </div>
      <div style={{width:"60px", height:"50px", }}>
        {!sprache && (    <button onClick={()=>setSprache(!sprache)}><img src="/usa.jpg" alt="Det"  style={{borderRadius:"40%"}}/> </button>)}
    
      
      </div>
      </div>
    <div className="flex flex-col justify-center items-center mt-36  ">
    
      <h1> {sprache ? "Sig In " :"REGISTEREN "}   </h1>
      <br />
      <br />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout( () => {
            setSubmitting(false);
             dispatch(logUser(values));
          
            navi('/stock')
            
            console.log(data, "login olunca");
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
            <br />
            <br />
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <br />
            <div className="flex justify-center items-center"> 
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
            </div>
          </Form>
        )}
      </Formik>
      <br />
            <br />
      <div onClick={derleme}> {sprache ? "If you are not a member, sign up" :" Wenn Sie kein Mitglied sind, melden Sie sich an"}  </div>
    </div>
    </div>
  );
};

export default Sigin;
