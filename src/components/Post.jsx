'use strict';
import PropTypes from 'prop-types';
// *Names up to you. You can name it styles or something else. I am using classes here for now
import classes from './Post.module.css';

export default function Post({ author, body }) {
  // const randomName = Math.random() > 0.5 ? name[0] : name[1];

  return (
    // <section style={{ color: 'tomato', textAlign: 'left' }}>
    <section className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </section>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
