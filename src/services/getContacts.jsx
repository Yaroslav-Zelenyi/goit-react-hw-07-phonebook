import axios from 'axios';
const BASE_URL = 'https://643507dc537112453fcbd347.mockapi.io/contacts';

export const getContacts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(BASE_URL, contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
};
