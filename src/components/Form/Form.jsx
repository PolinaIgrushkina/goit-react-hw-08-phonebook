import PropTypes from 'prop-types';

function Form({ handleSubmit, handleChangeInput, name, number }) {
  return (
  <form onSubmit={handleSubmit}>
    <label> Name
      <input
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeInput}
      />
    </label>
      
    <label> Number
      <input
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChangeInput}
      />
    </label>

    <button type="submit">Add contact</button>
  </form>);
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

export default Form;