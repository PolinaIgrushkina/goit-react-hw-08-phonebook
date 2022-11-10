import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/ContactList/contacts-operations';
import { Button, Item } from './Contact.styled';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
