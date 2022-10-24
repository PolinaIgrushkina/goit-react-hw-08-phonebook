import { Component } from "react";
import ContactsList from "./ContactsList/ContactsList";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";

const CONTACTS_LS_KEY = 'contacts';

export class App extends Component  {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem(CONTACTS_LS_KEY);
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (newContacts !== prevContacts) {
      localStorage.setItem(CONTACTS_LS_KEY, JSON.stringify(newContacts));
    }
  }

  handleSubmit = (name, number) => { 
    this.state.contacts.find(contact => contact.name === name)  
    ? alert(`${name} is already in contacts`)
    : this.setState(prevState => {
      return {
        contacts: [...prevState.contacts,
        { name, number, id: nanoid(), }
        ]
      }
    })
  };

   handleDeleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== id) };
    });
  };

  handleChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return <div>
      <h1>Phonebook</h1>
      <Form onSubmit={this.handleSubmit} />
      
      <h2>Contacts</h2>
      <Filter value={this.state.filter} handleChangeFilter={this.handleChangeFilter} />
      <ContactsList contacts={filteredContacts} onDeleteUser={this.handleDeleteUser} />
    </div>
  }
};

