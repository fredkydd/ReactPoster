import './App.css';
import { useState } from 'react';
import MainHeader from './components/MainHeader';
import PostList from './components/PostList';

// todo npm i react-icons

function App() {
  const [modalIsVisible, setModalVisible] = useState(false),
    hideModalHandler = () => setModalVisible((x) => !x),
    showModalHandler = () => setModalVisible((x) => !x);

  return (
    <>
      <MainHeader showModalHandler={showModalHandler} />
      <main>
        <PostList
          modalIsVisible={modalIsVisible}
          hideModalHandler={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
