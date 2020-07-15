import { createStore } from 'redux';
// import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

//  const store = createStore(
//   rootReducer,
//   { contactsRoot: { contacts } },
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   );

const store = configureStore({
  reducer: {
    theme: themeReducer,
    contactsRoot: contactsReducer,
  }
  
});

export default store;
