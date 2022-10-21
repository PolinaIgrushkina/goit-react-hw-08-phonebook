import PropTypes from 'prop-types';

function Filter({handleChangeFilter, value}) {
  return (<label>Find contacts by name<input type='text' value={value} onChange={handleChangeFilter}/></label>)
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;