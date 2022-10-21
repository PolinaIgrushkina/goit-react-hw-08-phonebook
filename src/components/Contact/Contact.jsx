import PropTypes from 'prop-types';

function Contact({ name, number }) {
  return (<li>
      <span>{name}: </span>
      <span>{number}</span>
    </li>)
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

export default Contact;