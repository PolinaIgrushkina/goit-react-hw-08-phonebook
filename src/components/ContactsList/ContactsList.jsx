import { useSelector } from 'react-redux';
import { selectorFilteredContacts } from 'redux/selectors';
import Contact from '../Contact/Contact';

function ContactsList() {
  const contacts = useSelector(selectorFilteredContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          phone={contact.phone}
          name={contact.name}
          id={contact.id}
        />
      ))}
    </ul>
  );
}

export default ContactsList;
