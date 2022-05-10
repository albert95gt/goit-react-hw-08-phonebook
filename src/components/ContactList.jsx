import ContactItem from './ContactItem';
import BounceLoader from 'react-spinners/BounceLoader';

import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactApi';
import { contactsSelectors } from 'redux/contacts';

const ContactList = () => {
  const filter = useSelector(contactsSelectors.getFilter);

  const { contacts, isFetching } = useGetContactsQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => ({
      contacts: data ? contactsSelectors.getVisibleContacts(data, filter) : [],
      isFetching,
    }),
    refetchOnMountOrArgChange: true,
  });

  return (
    <ul>
      {isFetching && <BounceLoader color="orange" />}
      {!isFetching &&
        contacts &&
        contacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact}></ContactItem>;
        })}
    </ul>
  );
};

export default ContactList;
