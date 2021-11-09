import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onModalshow}) => {


  
  return (
    <>
      {images.map(({id, webformatURL, largeImageURL}) => (<li key={id} className={s.imageGalleryItem}>
      
          <img src={webformatURL} alt="" className={s.imageGalleryItemImage} onClick={() => onModalshow(largeImageURL)}/>
      
    </li>))}
    
  </>
  )
    
    
  
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onModalshow: PropTypes.func.isRequired
}

export default ImageGalleryItem;