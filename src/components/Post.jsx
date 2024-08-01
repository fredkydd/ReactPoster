/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import classes from './Post.module.css';

export default function Post({ id, name, body }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.name}>{name}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}
