import PropTypes from 'prop-types';
import css from './ContactList.module.css';
const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={css.list__items}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.items}>
          {name + ': ' + number}
          <button
            type="button"
            className={css.button__remove}
            onClick={() => onRemoveContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.object.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
export default ContactList;