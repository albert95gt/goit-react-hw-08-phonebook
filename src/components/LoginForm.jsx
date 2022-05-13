import { Container, Grid, Typography } from '@mui/material';
import { Login } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from './FormsUI/Forms';
import Button from './Button/Button';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

export default function LoginForm() {
  const INITIAL_FORM_STATE = {
    email: '',
    password: '',
  };

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Please Enter your password'),
  });

  const dispatch = useDispatch();

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <Container maxWidth="md">
            <Formik
              initialValues={INITIAL_FORM_STATE}
              validationSchema={FORM_VALIDATION}
              onSubmit={({ email, password }, { resetForm }) => {
                dispatch(authOperations.logIn({ email, password }));
                resetForm();
              }}
            >
              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography>Login</Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <TextField
                      type="email"
                      color="secondary"
                      name="email"
                      size="small"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <TextField
                      color="secondary"
                      type="password"
                      name="password"
                      size="small"
                      label="Password"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Button startIcon={<Login />}>Login</Button>
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
