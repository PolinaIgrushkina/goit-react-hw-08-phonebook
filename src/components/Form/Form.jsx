import { useState } from 'react';
import { FormSlyled, Label, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/ContactList/contacts-operations';
import { selectorContacts } from 'redux/selectors';

function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormSlyled onSubmit={handleSubmit}>
      <Label>
        {' '}
        Name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeInput}
          placeholder="Name Surname"
        />
      </Label>

      <Label>
        {' '}
        Number
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeInput}
          placeholder="111-11-11"
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </FormSlyled>
  );
}

export default Form;
