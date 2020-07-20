import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/ADD_REQUEST');
const addContactSuccess = createAction('contacts/ADD_SUCCESS');
const addContactError = createAction('contacts/ADD_ERROR');

const fetchContactsRequest = createAction('contacts/FETCH_REQUEST');
const fetchContactsSuccess = createAction('contacts/FETCH_SUCCESS');
const fetchContactsError = createAction('contacts/FETCH_ERROR');

const deleteContactRequest = createAction('contacts/DELETE_REQUEST');
const deleteContactSuccess = createAction('contacts/DELETE_SUCCESS');
const deleteContactError = createAction('contacts/DELETE_ERROR');

const changeFilter = createAction('contacts/changeFilter');

const changeContactRequest = createAction ('contacts/CHANGE_CONTACT_REQUEST')
const changeContactSuccess = createAction ('contacts/CHANGE_CONTACT_SUCCESS')
const changeContactError = createAction ('contacts/CHANGE_CONTACT_ERROR')

const addIdEditContact = createAction('contacts/addIdEditContact');
// const addIdEditContactRequest = createAction('contacts/ADD_ID_EDIT_CONTACT_REQUEST');
// const addIdEditContactSuccess = createAction('contacts/ADD_ID_EDIT_CONTACT_SUCCESS');
// const addIdEditContactError = createAction('contacts/ADD_ID_EDIT_CONTACT_ERROR');

const deleteIdEditContact = createAction('contacts/deleteIdEditContact');
// const deleteIdEditContactRequest = createAction('contacts/DELETE_ID_EDIT_CONTACT_REQUEST');
// const deleteIdEditContactSuccess = createAction('contacts/DELETE_ID_EDIT_CONTACT_SUCCESS');
// const deleteIdEditContactError = createAction('contacts/DELETE_ID_EDIT_CONTACT_ERROR');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  // addIdEditContactRequest,
  // addIdEditContactSuccess,
  // addIdEditContactError,
  // deleteIdEditContactRequest,
  // deleteIdEditContactSuccess,
  // deleteIdEditContactError,
  changeContactRequest,
  changeContactSuccess,
  changeContactError,
  changeFilter,
  // changeContact,
  addIdEditContact,
  deleteIdEditContact,
};
