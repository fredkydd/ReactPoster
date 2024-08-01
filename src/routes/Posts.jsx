import { Outlet } from 'react-router-dom';
import PostList from '../components/PostList';

// todo npm i react-icons

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts'),
    resData = await response.json();

  return resData.posts;
}
