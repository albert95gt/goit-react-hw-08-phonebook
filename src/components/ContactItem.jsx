// import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';
// import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';
import { MdDeleteForever } from 'react-icons/md';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteContact = () => {
    deleteContact(id);
    alert(`Contact ${name} successfully deleted!`);
  };

  return (
    <li>
      <span>{name}:</span>
      <span>{phone}</span>
      <button type="button" onClick={handleDeleteContact} disabled={isLoading}>
        Delete
        {isLoading ? (
          <ClipLoader size="20px" color="aqua" />
        ) : (
          <MdDeleteForever color="#f69d3c" size={22} />
        )}
      </button>
    </li>
  );
};

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ContactItem;
