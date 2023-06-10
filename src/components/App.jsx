import React, { useEffect, useState, createContext } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const ThemeContext = createContext();

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = evt => {
    const deleteContact = contacts.filter(
      contact => contact.id !== evt.currentTarget.id
    );
    setContacts([...deleteContact]);
  };

  const formSubmitHandler = data => {
    setContacts([...contacts, data]);
  };

  const handleSearch = evt => {
    setFilter(evt.target.value);
  };

  const displaySearchresults = () => {
    const filteredContacts = contacts.filter(contact => {
      const searchResultLower = filter.toLowerCase();
      const contactNameLover = contact.name.toLowerCase();
      return contactNameLover.includes(searchResultLower);
    });
    return filteredContacts;
  };

  return (
    <ThemeContext.Provider value={deleteContacts}>
      <div className={css.section}>
        <div className={css.form}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm onSubmit={formSubmitHandler} contacts={contacts} />
        </div>
        <div className={css.form}>
          <h2 className={css.subtitle}>Contacts</h2>
          <Filter filter={filter} handleSearch={handleSearch} />
          <ContactList contacts={displaySearchresults()} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
