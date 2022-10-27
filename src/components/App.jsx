import { useState, useEffect, useMemo } from "react";
import ContactsList from "./ContactsList/ContactsList";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";

const CONTACTS_LS_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(CONTACTS_LS_KEY)) ?? []) ;
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_LS_KEY, JSON.stringify(contacts));
  }, [contacts]);


 const handleSubmit = (name, number) => { 
    contacts.find(contact => contact.name === name)  
    ? alert(`${name} is already in contacts`)
    : setContacts([...contacts, { name, number, id: nanoid()}])
  };

  const handleDeleteUser = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  }

  const normalizedFilter = filter.toLowerCase();
  
  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }, [contacts, normalizedFilter])
  
  return (<div>
    <h1>Phonebook</h1>
    <Form onSubmit={handleSubmit} />
      
    <h2>Contacts</h2>
    <Filter value={filter} handleChangeFilter={handleChangeFilter} />
    <ContactsList contacts={filteredContacts} onDeleteUser={handleDeleteUser} />
  </div>);
};

