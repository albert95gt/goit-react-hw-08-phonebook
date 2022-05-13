import { Grid, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from './FormsUI/Forms';
import Button from './Button/Button';
import { toast } from 'react-toastify';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactApi';

const ContactForm = () => {
  const INITIAL_FORM_STATE = {
    name: '',
    number: '',
  };

  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().required('Required'),
    number: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number')
      .required('Required'),
  });

  const { data } = useGetContactsQuery();
  const [addContact] = useCreateContactMutation();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={async ({ name, number }, { resetForm }) => {
            const searchContact = await data.some(contact => {
              return contact.name.toLowerCase().includes(name.toLowerCase());
            });
            if (searchContact) {
              toast.error(`${name} is alredy in contacts!!!`);
              return;
            }

            await addContact({ name, number });
            toast.success(`${name} has added to contacts list`);
            resetForm();
          }}
        >
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={20}>
                <Typography>Add new contacts</Typography>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  color="secondary"
                  name="name"
                  label="Name"
                  size="small"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  color="secondary"
                  name="number"
                  label="Phone number"
                  size="small"
                />
              </Grid>

              <Grid item xs={4}>
                <Button size="medium" startIcon={<Add />}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
