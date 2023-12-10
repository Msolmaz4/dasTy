import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';


interface Values {
  email: string;
  password: string;
  name:string;
        firstname:string;
}

function Signup() {
  return (
    <div> 
    <Formik
      initialValues={{
        email: '',
        password: '',
        name:'',
        firstname:'',
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
        if (!values.name) {
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
          <br />  <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
          /><br/>
          <Field
            component={TextField}
            name="name"
            type="text"
            label="Name"
          />
          <br />
          <Field
            component={TextField}
            type="firstname"
            label="text"
            name="firstname"
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
    <div> uye iseniy   sig  in </div>
    </div>
  );
}
export default Signup
