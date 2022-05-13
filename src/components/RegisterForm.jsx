import { Container, Grid, Typography } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from './FormsUI/Forms';
import Button from './Button/Button';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    password: '',
  };

  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      ),
  });

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <Container maxWidth="md">
            <Formik
              initialValues={INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={({ name, email, password }, { resetForm }) => {
                dispatch(authOperations.register({ name, email, password }));
                resetForm();
              }}
            >
              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography>Register</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      color="secondary"
                      name="name"
                      label="Name"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      type="email"
                      color="secondary"
                      name="email"
                      size="small"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      color="secondary"
                      type="password"
                      name="password"
                      size="small"
                      label="Password"
                    />
                  </Grid>

                  <Grid item xs={1}>
                    <Button size="medium" startIcon={<PersonAdd />}>
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
