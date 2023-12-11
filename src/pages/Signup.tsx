import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postUser } from '../redux/userSlice';
import { useEffect } from 'react';



interface Values {
  email: string;
  password: string;
  name:string;
  firstName:string;
}

function Signup() {
  const data = useSelector(state=>state.user)
  const navi = useNavigate()
  console.log(data,'sig')
  const dispatch  = useDispatch()

  useEffect(()=>{
    if(data.data.token){
      navi('/')
    }
  },[dispatch])
  return (
    <div> 
    <Formik
      initialValues={{
        email: '',
        password: '',
        lastName:'',
        firstName:'',
        username:'',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.username) {
          errors.name = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        if (!values.firstName) {
          errors.firstName = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log(values)
          dispatch(postUser(values))
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="username"
            type="text"
            label="Username"
          />
          <br />  <Field
            component={TextField}
            type="text"
            label="First Name"
            name="firstName"
          /><br/>
          <Field
            component={TextField}
            name="lastName"
            type="text"
            label="Last Name"
          />
          <br />
          <Field
            component={TextField}
            type="email"
            label="Email"
            name="email"
          />
          <br />
          <Field
            component={TextField}
            type="password"
            label="password"
            name="password"
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm }
          >
            Submit
          </Button>
          
        </Form>
      )}
    </Formik>
    <div><Link to='/'>uye iseniy   sig  in </Link>  </div>
    </div>
  );
}
export default Signup
