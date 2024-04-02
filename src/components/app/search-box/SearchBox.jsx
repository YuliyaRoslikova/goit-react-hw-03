import { useState } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className={css.container}>
      <p>Find contact by name</p>
      <input className={css.input} type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
