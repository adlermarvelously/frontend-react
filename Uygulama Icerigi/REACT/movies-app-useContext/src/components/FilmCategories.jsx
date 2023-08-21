import React, { useContext } from "react";
import { FilmsContext } from "../context/FilmsContext";

const FilmCategories = () => {
    const {categories,handleCategoryChange} = useContext(FilmsContext)
  return (
    <>
      <h1>Filmler Projesi</h1>
      <div className="categories">
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilmCategories;
