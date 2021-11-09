import { useState } from "react";
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';


function Searchbar({ onSubmit}) {

  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue)
  }
    

  
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={handleOnSubmit}>
          <button type="submit" className={s.searchFormButton}>
      <span className={s.buttonLabel}>Search</span>
    </button>

    <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleOnChange}
    />
  </form>
    </header>
  )
   }

  


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
  

export default Searchbar;