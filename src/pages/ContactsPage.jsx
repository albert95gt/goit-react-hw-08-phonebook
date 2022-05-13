import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Container, Grid } from '@mui/material';

export default function ContactPage() {
  return (
    <main>
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="column" justifyContent="center">
          <Grid item xs={20}>
            <ContactForm />
          </Grid>

          <Grid item xs={15}>
            <Filter />
          </Grid>

          <Grid item xs={10}>
            <ContactList />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
