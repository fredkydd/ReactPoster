import classes from './PostList.module.css';
import Post from './Post';
import { useLoaderData } from 'react-router-dom';

export default function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map(({ body, name, id }, index) => (
            <Post key={index} id={id} name={name} body={body} />
          ))}
        </ul>
      ) : (
        <section
          style={{
            display: 'grid',
            placeContent: 'center',
            placeItems: 'center',
            gap: '0.5rem',
          }}
        >
          No posts available.
        </section>
      )}
    </>
  );
}

// todo The spread operator (...) is used to 'unpack' the elements of resData.posts and prevPostData into a new array
// todo because both file is inside of the array that's why we use ... here to make them a single object [{}] => {}

// ! fetch() function is used to send and fetch data from back end. Not only for get from server
// ! default goal of fetch() is to get but below there we configured it method 'POST'
// ! fetch() was in the PostList.jsx call this API method 👇
