import React from 'react';
import { useState } from 'react';
import { AddCategory, GiftGrid } from './components/';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // Si no quiero que se vallan almacenando los resultados tendría que poner:
    // setCategories([newCategory]);
    // Con esto no vamos añadiendo las categorías al arreglo
    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory onNewCategory={(category) => onAddCategory(category)}></AddCategory>
      {categories.map(category => ( <GiftGrid key={category} category={category} ></GiftGrid> ))}
    </>
  )

}