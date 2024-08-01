import { getStoredPosts, storePosts } from './data/posts.js';
import express from 'express';
import pkg from 'body-parser';

const { json } = pkg,
  app = express();

app.use(json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/posts', async (req, res) => {
  try {
    const storedPosts = await getStoredPosts();
    // !Delaying for testing
    // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
    res.json({ posts: storedPosts });
  } catch (error) {
    res.status(500).json({ message: 'Failed to load posts.' });
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find((post) => post.id === req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    res.json({ post });
  } catch (error) {
    res.status(500).json({ message: 'Failed to load post.' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const existingPosts = await getStoredPosts();
    const postData = req.body;
    const newPost = {
      ...postData,
      id: Math.random().toString(),
    };
    const updatedPosts = [newPost, ...existingPosts];
    await storePosts(updatedPosts);
    res.status(201).json({ message: 'Stored new post.', post: newPost });
  } catch (error) {
    res.status(500).json({ message: 'Failed to store post.' });
  }
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
