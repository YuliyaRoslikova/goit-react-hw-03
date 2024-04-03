import { useState, useEffect } from 'react';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import SearchBox from './search-box/SearchBox';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedState = localStorage.getItem('saved-contacts');
    return savedState ? JSON.parse(savedState) : initContacts;
  });

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact => id !== contact.id);
    setContacts(filteredContacts);
  };

  const handleSearchChange = searchTerm => {
    setFilter(searchTerm);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox onSearchChange={handleSearchChange} />
      <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} />
    </div>
  );
};

export default App;
