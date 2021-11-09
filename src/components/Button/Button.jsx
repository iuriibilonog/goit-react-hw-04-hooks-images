import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore}) => {

  
  return (
    <button onClick={ onLoadMore} className={s.button} type="button">Load More</button>
  )
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired
}


export default Button;