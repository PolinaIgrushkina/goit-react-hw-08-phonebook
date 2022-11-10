import { useSelector } from 'react-redux';
import { selectorFilteredContacts } from 'redux/selectors';
import Contact from '../Contact/Contact';
import { List } from './ContactList.styled';

function ContactsList() {
  const contacts = useSelector(selectorFilteredContacts);
  return (
    <List>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          number={contact.number}
          name={contact.name}
          id={contact.id}
        />
      ))}
    </List>
  );
}

export default ContactsList;
