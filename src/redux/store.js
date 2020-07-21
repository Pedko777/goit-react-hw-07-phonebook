  import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';

const store = configureStore({
  reducer: {
    themeColor: themeReducer,
    contactsRoot: contactsReducer,
  },
  middleware: [thunk],
});

export default store;
