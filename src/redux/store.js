import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    contactsRoot: contactsReducer,
  },
  middleware: [thunk],
});

export default store;
