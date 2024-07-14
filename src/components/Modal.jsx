import classes from './Modal.module.css';
import PropTypes from 'prop-types';

// todo if it is wrapper we should use children props to add them into wrapper element

// todo {children} always refers to the content that's passed between the opening && closing tags of your custom component.

export default function Modal({ children, modalIsVisible, hideModalHandler }) {
  return (
    <>
      <div className={classes.backdrop} onClick={hideModalHandler} />
      {/* open={true} === open default value is true */}
      <dialog className={classes.modal} open={modalIsVisible}>
        {children}
      </dialog>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  modalIsVisible: PropTypes.bool.isRequired,
  hideModalHandler: PropTypes.func.isRequired,
};
