import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import RootLayout from './routes/RootLayout.jsx';
import NewPost from './routes/NewPost.jsx';
import Posts, { loader as postsLoader } from './routes/Posts.jsx';
import PostDetails, {
  loader as postDetailsLoader,
} from './routes/PostDetails.jsx';
import { action as newPostAction } from './routes/NewPost.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/new-post', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// RouterProvider is for routing
// createBrowserRouter([]) is for configuration like router={router}

// React Router wait the loader element finish before to render Posts component
