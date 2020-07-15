import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction("contacts/ADD_CONTACT", (name, number) => ({
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}));

const deleteContact = createAction("contacts/deleteContact");

const changeFilter = createAction("contacts/changeFilter");

const changeContact = createAction("contacts/changeContact",  (idContactChange, changeName, changeNumber) => ({
  payload: {
    contact: {
      id: idContactChange,
      name: changeName,
      number: changeNumber,
    },
  },
}));

const addIdEditContact = createAction("contacts/addIdEditContact");

const deleteIdEditContact = createAction("contacts/deleteIdEditContact");

export default {
  addContact,
  deleteContact,
  changeFilter,
  changeContact,
  addIdEditContact,
  deleteIdEditContact,
};
