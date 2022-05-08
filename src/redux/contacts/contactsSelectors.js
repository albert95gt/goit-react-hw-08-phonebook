import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.contacts;
const getFilter = state => state.filter.value;
const getIsLoading = state => state.contacts.isLoading;

// const getVisibleContacts = createSelector(
//   [getAllContacts, getFilter],
//   (contacts, filter) => {
//     console.log(contacts);
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ value }) =>
//       value.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );

const contactsSelectors = {
  getAllContacts,
  getIsLoading,
};

export default contactsSelectors;
