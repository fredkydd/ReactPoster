import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Add this line to import PropTypes
import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

export default function PostList({ modalIsVisible, hideModalHandler }) {
  // ! this will cause loop so to fix that use useEffect
  // ! also we can not use async function here without useEffect hook
  // fetch(
  //   'http://localhost:8080/posts'
  //     .then((response) => response.JSON())
  //     .then((data) =>
  //       setPosts(setPosts((prevPostData) => [data.posts, ...prevPostData]))
  //     )
  // );

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://localhost:8080/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await response.json();
        setPosts((prevPostData) => [resData, ...prevPostData]);
      } catch (error) {
        console.error('Fetch error: ', error);
      }
    })();
  }, []);

  function addPostHandler(postData) {
    // ! fetch() function is used to send and fetch data from back end. Not only for get from server
    // ! default goal of fetch() is to get but below there we configured it method 'POST'
    // ! fetch() was in the PostList.jsx call this API method 👇
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json',
      },
    });

    setPosts((prevPostData) => [postData, ...prevPostData]);
    console.log(posts);
  }

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

      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((item, index) => (
            <Post key={index} author={item.name} body={item.body} />
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
