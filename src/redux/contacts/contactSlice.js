import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = { contacts: [], isLoading: false, error: null };

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [contactsOperations.addContacts.fulfilled](state, action) {
      state.contacts.push(action.payload);
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export default contactSlice.reducer;
