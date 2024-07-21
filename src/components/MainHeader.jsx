import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import PropTypes from 'prop-types';

export default function MainHeader({ showModalHandler }) {
  return (
    <header className={classes.header}>
      <h1 className="classes logo">
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={showModalHandler}>
          <MdPostAdd size={20} color="grey" />
          New Post
        </button>
      </p>
    </header>
  );
}

MainHeader.propTypes = {
  showModalHandler: PropTypes.func.isRequired,
};
