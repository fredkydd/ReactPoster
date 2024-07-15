'use strict';
import PropTypes from 'prop-types';
import classes from './Post.module.css';

export default function Post({ name, body }) {
  return (
    <section className={classes.post}>
      <p className={classes.name}>{name}</p>
      <p className={classes.text}>{body}</p>
    </section>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
