import contactsAction from './contactsAction';
import axios from 'axios';

const db = 'http://localhost:2020/contacts';

const addContact = (name, number) => dispatch => {
  dispatch(contactsAction.addContactRequest());

  axios
    .post(db, { number, name })
    .then(({ data }) => {
      dispatch(contactsAction.addContactSuccess(data));
    })
    .catch(error => dispatch(contactsAction.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsAction.fetchContactsRequest());

  axios
    .get(db)
    .then(({ data }) => dispatch(contactsAction.fetchContactsSuccess(data)))
    .catch(error => dispatch(contactsAction.fetchContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactsAction.deleteContactRequest());

  axios
    .delete(`${db}/${id}`)
    .then(() => dispatch(contactsAction.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsAction.deleteContactError(error)));
};

const changeContact = (id, name, number) => (dispatch)=> {
  dispatch(contactsAction.changeContactRequest());

  axios
   .patch(`${db}/${id}`, {id, number, name })
   .then(console.log({id, number, name }))
   .then(({id, number, name })=> dispatch(contactsAction.changeContactSuccess(id, number, name )))
   .catch((error)=>dispatch(contactsAction.changeContactError(error)))
}

// const addIdEditContact = (id) => (dispatch) => {
//   dispatch(contactsAction.addIdEditContactRequest());

//   axios
//     .get(`${db}/${id}`)
//     .then(console.log(id))
//     .then(() => dispatch(contactsAction.addIdEditContactSuccess(id)))
//     .catch(error => dispatch(contactsAction.addIdEditContactError(error)));
// };

// const deleteIdEditContact = (id) => (dispatch) => {
//   dispatch(contactsAction.deleteIdEditContactRequest());

//   axios
//     .delete(`${db}/${id}`)
//     .then(() => dispatch(contactsAction.deleteContactSuccess(id)))
//     .catch(error => dispatch(contactsAction.deleteContactError(error)));
// };

export default {
  addContact,
  deleteContact,
  fetchContacts,
  changeContact,
  // addIdEditContact,
  // deleteIdEditContact,
};
