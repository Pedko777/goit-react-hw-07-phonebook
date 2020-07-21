// import {createSelector} from "@reduxjs/toolkit"
const getLoading = state => state.contactsRoot.loading;
const getFilter = state => state.contactsRoot.filter;
const getContacts = state => state.contactsRoot.contacts;

const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};


export default {
  getFilter,
  getLoading,
  getContacts,
  getFilteredContacts,
};
