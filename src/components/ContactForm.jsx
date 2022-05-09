import { useState } from 'react';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { toast } from 'react-toastify';

import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactApi';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useCreateContactMutation();

  const handdleChange = event => {
    const name = event.currentTarget.name;
    const inputValue = event.target.value;

    switch (name) {
      case 'name':
        setName(inputValue);
        break;
      case 'number':
        setNumber(inputValue);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const searchContact = await data.some(contact => {
      return contact.name.toLowerCase().includes(name.toLowerCase());
    });
    if (searchContact) {
      toast.error(`${name} is alredy in contacts!!!`);
      return;
    }

    await addContact({ name, number });
    toast.success(`${name} has added to contacts list`);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handdleChange}
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handdleChange}
      />
      <button type="submit">
        Add contact
        <MdPersonAddAlt1 color="#f69d3c" size={22} />
      </button>
    </form>
  );
};

export default ContactForm;
