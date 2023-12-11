import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postUser } from '../redux/userSlice';



interface Values {
  email: string;
  password: string;
  name:string;
  firstname:string;
}

function Signup() {
  const data = useSelector(state=>state.user)
  console.log(data)
  const dispatch  = useDispatch()
  return (
    <div> 
    <Formik
      initialValues={{
        email: '',
        password: '',
        lastname:'',
        firstname:'',
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
        if (!values.firstname) {
          errors.firstname = 'Required';
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
            name="firstname"
          /><br/>
          <Field
            component={TextField}
            name="lastname"
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
            onClick={submitForm}
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
