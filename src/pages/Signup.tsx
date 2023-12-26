import { Button, LinearProgress } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../redux/userSlice";
import useSprache from "../hooks/useSprache";



interface Values {
  email: string;
  password: string;
  name: string;
  firstName: string;
}

function Signup() {
  const navi = useNavigate();
  const {enfli} = useSprache()
 
  const dispatch = useDispatch();

  return (
    <div > 
       <div style={{display:"flex", justifyContent:"flex-end", marginTop:"15px" ,marginRight:"10px"}}>
      <div style={{width:"50px", height:"60px" }}>
      <img src="/det.jpg" alt="Det" />
      </div>
      <div style={{width:"60px", height:"50px", }}>
      <img src="/usa.jpg" alt="Det"  style={{borderRadius:"40%"}}/>
      </div>
      </div>
    <div className="flex flex-col justify-center items-center mt-36  ">
     <h2> SignUp</h2>
     <br />
      <Formik
        initialValues={{
          email: "",
          password: "",
          lastName: "",
          firstName: "",
          username: "",
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
          if (!values.username) {
            errors.name = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);

            dispatch(postUser(values));

            navi("/");
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="username"
              type="text"
              label="UserName"
            />
            <br />
            <br />
            <Field
              component={TextField}
              type="text"
              label="First Name"
              name="firstName"
            />
          <br/>
            <br />
            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last Name"
            />
          <br />
            <br />
            <Field
              component={TextField}
              type="email"
              label="Email"
              name="email"
            />
            <br />
            <br />
            <Field
              component={TextField}
              type="password"
              label="password"
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
      <div>
        <Link to="/"> If you are a member, Sign In</Link>{" "}
      </div>
    </div>
    </div>
  );
}
export default Signup;
