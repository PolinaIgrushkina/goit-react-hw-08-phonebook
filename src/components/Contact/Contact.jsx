import PropTypes from 'prop-types';
import { Button } from './Contact.styled';

function Contact({ name, number, id, onDeleteUser }) {
 const handleDelete = () => {
    onDeleteUser(id);
  };

  return (<li>
    <span>{name}: </span>
    <span>{number}</span>
    <Button type='button' onClick={handleDelete}>Delete</Button>
    </li>)
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
}

export default Contact;