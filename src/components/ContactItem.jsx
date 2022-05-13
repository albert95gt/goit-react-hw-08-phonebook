import PropTypes from 'prop-types';
import { generateDiceBearAvataaars } from 'utils';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteContact = () => {
    deleteContact(id);
    toast.success(`Contact ${name} successfully deleted!`);
  };

  return (
    <ListItem
      divider
      sx={{
        display: { sx: 'block', md: 'flex' },
        alignItems: 'center',
        maxWidth: 400,
        minHeight: 150,
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt="Bear avatars"
          src={generateDiceBearAvataaars(Math.random())}
        />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography variant="body1" component="span">
            {number}
          </Typography>
        }
      />
      <IconButton
        variant="contained"
        color="secondary"
        onClick={handleDeleteContact}
        aria-label="delete"
      >
        {isLoading ? <ClipLoader size="20px" color="aqua" /> : <Delete />}
      </IconButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
