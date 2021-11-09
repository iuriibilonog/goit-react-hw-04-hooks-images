import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';


const ImageGallery = ({ images, onModalshow }) => {


  return (
    <ul className={s.imageGallery}>
      <ImageGalleryItem images={images} onModalshow={onModalshow}/>
</ul>
  )
}




export default ImageGallery;