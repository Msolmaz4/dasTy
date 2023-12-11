import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Link } from 'react-router-dom';


interface Values {
  email: string;
  password: string;
}

const Sigin = () => {
  return (
    <div> <h1>signin</h1>
        <Formik
    initialValues={{
      email: '',
      password: '',
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
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
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

  <div><Link to='/signup'>uye iseniy   sig  up </Link>  </div></div>
  )
}

export default Sigin