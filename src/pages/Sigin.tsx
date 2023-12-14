import { Button, LinearProgress } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logUser, reset } from "../redux/userSlice";
import React from "react";

interface Values {
  email: string;
  password: string;
}

const Sigin:React.FC = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  const derleme = () => {
    navi("/signup");
    dispatch(reset());
  };
  return (
    <div>
      {" "}
      <h1>signin</h1>
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
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <div onClick={derleme}> uye degilseniz uye olunuz </div>
    </div>
  );
};

export default Sigin;
