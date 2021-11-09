import { useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

function Modal({toggleModal, largePic}) {


  useEffect(() => {
    window.addEventListener('keydown', closeByEsc)
    
    return () => {
      window.removeEventListener('keydown', closeByEsc)
    }
  })

  

  const closeByEsc = (e) => {
    if (e.code === 'Escape') toggleModal();
  }

  const closeByClickOnOverlay = (e) => {
    if (e.target === e.currentTarget) toggleModal();  
  }

  
  return (
    <div className={s.overlay} onClick={closeByClickOnOverlay}>
      <div className={s.modal}>

        <img src={largePic} alt={largePic} />
       
  </div>
</div>
  )
  }
  


Modal.propTypes = {
    largePic: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired
  }

export default Modal;