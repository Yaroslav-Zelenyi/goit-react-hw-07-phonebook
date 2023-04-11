import {
  getContacts,
  addContact,
  deleteContact,
} from '../services/getContacts';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const data = await addContact(contact);
    return data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const data = await deleteContact(id);
    return data;
  }
);
