import classes from './NewPost.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function NewPost({ hideModalHandler, addPostHandler }) {
  const [enteredName, setEnteredName] = useState('Changeable Name '),
    nameChangeHandler = (x) => setEnteredName(x.target.value),
    [enteredBody, setEnteredBody] = useState('Changeable Body'),
    bodyChangeHandler = (x) => setEnteredBody(x.target.value),
    submitHandler = (x) => {
      x.preventDefault();
      const postData = {
        name: enteredName,
        body: enteredBody,
      };
      console.log(postData);

      addPostHandler(postData);
      hideModalHandler();
    };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          rows={3}
          onChange={bodyChangeHandler}
          placeholder="Type your text here"
          required
        />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          placeholder="Type your name"
          required
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={hideModalHandler}>
          Cancel
        </button>
        {/* type='submit'  deafult type of button is submit*/}
        <button>Submit</button>
      </p>
    </form>
  );
}

NewPost.propTypes = {
  hideModalHandler: PropTypes.func.isRequired,
  addPostHandler: PropTypes.func.isRequired,
};
