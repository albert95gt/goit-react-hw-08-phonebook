import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async descriptions => {
    try {
      const { data } = await axios.post('/contacts', descriptions);
      return data;
    } catch (error) {}
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
    } catch (error) {}
  }
);

const operations = {
  getContacts,
  addContacts,
  deleteContact,
};

export default operations;
