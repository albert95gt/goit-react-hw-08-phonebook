import { Button, Container, List, ListItem, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography align="center" variant="h4" component="h1">
        Welcome to PhoneBook!
      </Typography>

      <Typography
        sx={{ fontWeight: 600 }}
        align="center"
        variant="overline"
        component="h2"
      >
        With the phonebook, you can quickly and easy find the phone number of
        your contacts.
      </Typography>

      <Typography
        sx={{ fontWeight: 700 }}
        align="center"
        variant="subtitle1"
        component="p"
      >
        You have opportunity:
      </Typography>
      <List
        sx={{
          display: 'flex',
        }}
      >
        <ListItem divider>
          <Typography
            sx={{ fontWeight: 700 }}
            variant="subtitle1"
            component="p"
          >
            Add new contacts
          </Typography>
        </ListItem>

        <ListItem divider>
          <Typography
            sx={{ fontWeight: 700 }}
            variant="subtitle1"
            component="p"
          >
            Search contacts
          </Typography>
        </ListItem>
        <ListItem divider>
          <Typography
            sx={{ fontWeight: 700 }}
            variant="subtitle1"
            component="p"
          >
            Delete contacts
          </Typography>
        </ListItem>
      </List>
      {!isLoggedIn && (
        <Button
          variant="outlined"
          color="secondary"
          component={NavLink}
          to="/login"
        >
          Getting started
        </Button>
      )}
    </Container>
  );
};

export default HomePage;
