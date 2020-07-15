import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsAction from "./contactsAction"


const onAddContact = (state, action) => {
  if (
    state &&
    state.find(contact => action.payload.contact.name === contact.name)
  ) {
    alert('User with this name is already exist');
    return state;
  } else {
    return [...state, action.payload.contact];
  }
};

const onDeleteContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const onChangeContact = (state, action) => {
  return state.map(contact => {
    return contact.id === action.payload
    ? { ...contact, name: action.payload.name, number: action.payload.number }
    : contact;
  }
  );
};

const contacts = createReducer ([], {
  [contactsAction.addContact]: onAddContact,
  [contactsAction.deleteContact]: onDeleteContact,
  [contactsAction.changeContact]: onChangeContact,
});


const onAddIdEditContact = (state, {payload}) => {
  return [...state, payload]
};

const onDeleteIdEditContact =(state, {payload}) => {
  return state.filter(id => id !== payload);
};

const idEditContact = createReducer([], {
  [contactsAction.addIdEditContact]: onAddIdEditContact,
  [contactsAction.deleteIdEditContact]: onDeleteIdEditContact,
});


const onChangeFilter = (state, {payload}) => payload;

const filter = createReducer ('', {
  [contactsAction.changeFilter]: onChangeFilter,
});


export default combineReducers({
  contacts,
  idEditContact,
  filter,
});
