import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

export default function PostList({ modalIsVisible, hideModalHandler }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // !Fetch posts (GET)
  const fetchPosts = useCallback(async () => {
    try {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const resData = await response.json();
      setPosts(resData.posts); //! Set fetched posts for initial load
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setIsFetching(false);
    }
  }, []);

  // !Add new post (POST)
  const addPostHandler = useCallback(async (postData) => {
    try {
      const response = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const resData = await response.json();
      setPosts((prevPostData) => [resData.post, ...prevPostData]);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      {modalIsVisible && (
        <Modal
          modalIsVisible={modalIsVisible}
          hideModalHandler={hideModalHandler}
        >
          <NewPost
            hideModalHandler={hideModalHandler}
            addPostHandler={addPostHandler}
          />
        </Modal>
      )}

      {isFetching ? (
        <section
          style={{
            display: 'grid',
            placeContent: 'center',
            placeItems: 'center',
            gap: '0.5rem',
          }}
        >
          <h1
            style={{
              display: 'grid',
              placeContent: 'center',
              placeItems: 'center',
            }}
          >
            Loading...
          </h1>
        </section>
      ) : posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((item, index) => (
            <Post key={index} name={item.name} body={item.body} />
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
          <h1>There are no posts yet! 🥲</h1>
          <p>
            Please, click the <strong>New Post</strong> button to start creating
            posts! 😊
          </p>
        </section>
      )}
    </>
  );
}

PostList.propTypes = {
  modalIsVisible: PropTypes.bool.isRequired,
  hideModalHandler: PropTypes.func.isRequired,
};

// todo The spread operator (...) is used to 'unpack' the elements of resData.posts and prevPostData into a new array
// todo because both file is inside of the array that's why we use ... here to make them a single object [{}] => {}

// ! fetch() function is used to send and fetch data from back end. Not only for get from server
// ! default goal of fetch() is to get but below there we configured it method 'POST'
// ! fetch() was in the PostList.jsx call this API method 👇
