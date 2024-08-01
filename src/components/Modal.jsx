/* eslint-disable react/prop-types */
import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

export default function Modal({ children }) {
  const navigate = useNavigate(),
    closeHandler = () => navigate('..');

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      {/* open={true} === open default value is true */}
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}

// useNavigate uses for the navigating the page. navigate('path')
// if it is wrapper we should use children props to add them into wrapper element
// {children} always refers to the content that's passed between the opening && closing tags of your custom component.
