import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label__filter}>
      Find contacts by name
      <input
        type="text"
        className={css.filter__input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
