import React from 'react';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
// import { useGetContactsQuery } from 'redux/contacts/contactApi';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getAllContacts);
  //   const { data, isFetching } = useGetContactsQuery();
  //   const filterValue = useSelector(state => state.filter.value);
  //   const filteredContacts = data?.filter(({ name }) =>
  //     name.toLowerCase().includes(filterValue.toLowerCase())
  //   );

  return (
    <ul>
      {contacts &&
        contacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      {/* {isFetching && !data && <BounceLoader color="orange" />}

      {filteredContacts &&
        data &&
        filteredContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact}></ContactItem>;
        })} */}
    </ul>
  );
};

export default ContactList;
