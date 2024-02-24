import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    console.log(inputValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());

    setInputValue('');
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        className="input"
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
