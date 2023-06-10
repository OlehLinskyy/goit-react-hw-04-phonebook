import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import css from './Contact.module.css';

function Contact({ contact }) {
  const deleteContacts = useContext(ThemeContext);
  return (
    <li className={css.list}>
      <div className={css.contact_value}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        className={css.button}
        id={contact.id}
        type="button"
        onClick={deleteContacts}
      >
        Delete
      </button>
    </li>
  );
}
export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape().isRequired,
};
