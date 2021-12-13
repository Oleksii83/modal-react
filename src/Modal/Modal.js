// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
// import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

type ModalProps = {
  onCloseButtonClick: () => void,
};

function Modal(props: ModalProps) {
  const { onCloseButtonClick } = props;
  return createPortal(
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <span className={s.modalClose} onClick={onCloseButtonClick}>
          &#10005; {/* HTML code for a multiplication sign */}
        </span>
        This is my new modal!
        <div>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;

//-----------------------------------------------------------------------------------------------------------

// const modalRoot = document.querySelector('#modal-root');

// function Modal({ url, onClose }) {
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   });

//   const handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       onClose();
//     }
//   };

//   const handleBackdropClick = e => {
//     console.log('click');
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };
//   return createPortal(
//     <div className={s.Overlay} onClick={handleBackdropClick}>
//       <div className={s.Modal}>
//         <button className="">Yes</button>
//         <button className="">No</button>
//         {/* <img src={url} alt="" /> */}
//       </div>
//     </div>,
//     modalRoot,
//   );
// }

// export default Modal;

// Modal.propTypes = {
//   url: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
