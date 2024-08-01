import { useLoaderData, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

export default function PostDetails() {
  const post = useLoaderData();

  console.log('Post details in component:', post);

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.name}>{post.name}</p>
        <p className={classes.body}>{post.body}</p>
      </main>
    </Modal>
  );
}

export async function loader({ params }) {
  console.log('Fetching post details for ID:', params.id);

  try {
    const response = await fetch('http://localhost:8080/posts');
    if (!response.ok) {
      console.error('Failed to fetch posts data');
      return null;
    }

    const resData = await response.json();
    console.log('Fetched posts data:', resData);

    // Find the specific post by ID
    const post = resData.posts.find((post) => post.id === params.id);

    if (!post) {
      console.error('Post not found for ID:', params.id);
      return null;
    }

    return post;
  } catch (error) {
    console.error('Error fetching post details:', error);
    return null;
  }
}

//the word id of params.id must be same on the main router {path: '/:id'}
// ':postId' && params.postId
