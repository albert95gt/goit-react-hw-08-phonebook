import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import BounceLoader from 'react-spinners/BounceLoader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export default function ContactPage() {
  const isLoading = useSelector(contactsSelectors.getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);
  return (
    <>
      {isLoading && <BounceLoader color="orange" />}
      <ContactForm />
      <ContactList />
    </>
  );
}
