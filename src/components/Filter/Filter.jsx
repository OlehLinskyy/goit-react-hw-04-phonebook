import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ filter, handleSearch }) {
  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleSearch}
        />
      </label>
    </>
  );
}
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
