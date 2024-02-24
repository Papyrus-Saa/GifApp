import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import GifGrid from './components/gifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="mainTitle">GifApp</h1>

      <AddCategory
        setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
