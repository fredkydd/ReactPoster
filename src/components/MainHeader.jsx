/* eslint-disable react/prop-types */
import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className="classes logo">
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/new-post" className={classes.button}>
          <MdPostAdd size={20} color="grey" />
          New Post
        </Link>
      </p>
    </header>
  );
}

// Link prevents the browser default and let not it to refreh page after sending a request
// it takes to attribute instead of href
