import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';

function ContactsList({ contacts, onDeleteUser }) {
return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} name={contact.name} number={contact.number} id={contact.id} onDeleteUser={onDeleteUser} />
      ))}
    </ul>
  )
};

  ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

export default ContactsList;
  
