/* eslint-disable react/prop-types */
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

export default function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            name="body"
            rows={3}
            placeholder="Type your text here"
            required
          />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Type your name"
            required
          />
        </p>
        <p className={classes.actions}>
          <Link to={'..'} type="button">
            Cancel
          </Link>
          {/* type='submit'  deafult type of button is submit*/}
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

// will get information from inputs formData.get('body')
// {name: 'body', name: 'name'} All these are happening in client side
export async function action({ request }) {
  const formData = await request.formData(),
    postData = Object.fromEntries(formData);
  console.dir(postData);

  try {
    const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    response.ok
      ? console.log('Post created successfully')
      : console.error('Failed to create a post');
  } catch (error) {
    console.error('An error occurred while creating the post:', error);
  }

  return redirect('/');
}

// React Router Form element will handle the form submission and will prevent the browser default
// We use Form component which comes from React Router
