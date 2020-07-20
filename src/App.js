import React, { Component } from 'react'
import { connect } from 'react-redux';
import ConatctForm from './components/conactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';
import styles from './App.css';
import Logo from './components/logo/Logo';
import themeAction from './redux/theme/themeAction';
import themeSwitch from './services/themeSwitch';
import contactsOperation from "./redux/contacts/contactsOperation"

class App extends Component {
  componentDidMount (){
    this.props.onFetchContacts()
  }
render() {
  const { theme, toggleTheme, isLoadingContact } = this.props
  return (
    <div
      style={{
        color: themeSwitch[theme].fontColor,
        background: themeSwitch[theme].bodybg,
      }}
    >
      <div>
        <>
          <Logo />
          {isLoadingContact && <h2>Loading...</h2>}
          <button onClick={toggleTheme}>Change Theme</button>
        </>
      </div>
      <ConatctForm />
      <h2 className={styles.sectionTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
  
};

const mapStateToProps = state => {
  // console.log(state.contactsRoot.loading);
  return {
    theme: state.theme,
    isLoadingContact: state.contactsRoot.loading,
  };
};

const mapDispatchToProps = {
  toggleTheme: themeAction.changeTheme,
  onFetchContacts: contactsOperation.fetchContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
