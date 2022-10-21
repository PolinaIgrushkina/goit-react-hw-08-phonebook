import PropTypes from 'prop-types';

function Contact({contacts}) {
  return contacts.map(contact =>
    <li key={contact.id}>
      <span>{contact.name}:</span>
      <span>{contact.number}</span>
    </li>
  )
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Contact;