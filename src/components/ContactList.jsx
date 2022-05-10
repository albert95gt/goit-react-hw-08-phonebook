import React from 'react';
import ContactItem from './ContactItem';
import BounceLoader from 'react-spinners/BounceLoader';

import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactApi';
import { contactsSelectors } from 'redux/contacts';
import { authSelectors } from 'redux/auth';

const ContactList = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const { contacts, isFetching } = useGetContactsQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => ({
      contacts: data ? contactsSelectors.getVisibleContacts(data, filter) : [],
      isFetching,
    }),
    refetchOnMountOrArgChange: isLoggedIn,
  });

  return (
    <ul>
      {isFetching && !contacts && <BounceLoader color="orange" />}
      {contacts &&
        contacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact}></ContactItem>;
        })}
    </ul>
  );
};

export default ContactList;
