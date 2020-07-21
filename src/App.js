import React from 'react';

import themeSwitch from './services/themeSwitch';
import ConatctForm from './components/conactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import styles from './App.css';
import Logo from './components/logo/Logo';

const App = ({ contacts, theme, changeTheme, isLoadingContact }) => {

  console.log({theme, changeTheme})
  let themeState = 'light';
  theme ? (themeState = 'light') : (themeState = 'dark');
  
  return (
    <div
      style={{
        color: themeSwitch[themeState].fontColor,
        background: themeSwitch[themeState].bodybg,
      }}
    >
      <div>
        <>
          <Logo />
          {isLoadingContact && <h2>Loading...</h2>}
          <button onClick={changeTheme}>Change Theme</button>
        </>
      </div>
      <ConatctForm />
      <h2 className={styles.sectionTitle}>Contacts</h2>
      {contacts && contacts.length > 1 && <Filter />}
      <ContactList />
    </div>
  );
};

export default App;
