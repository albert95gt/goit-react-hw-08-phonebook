const getFilter = state => state.filter.value;

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const contactsSelectors = {
  getFilter,
  getVisibleContacts,
};

export default contactsSelectors;
