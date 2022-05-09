import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
