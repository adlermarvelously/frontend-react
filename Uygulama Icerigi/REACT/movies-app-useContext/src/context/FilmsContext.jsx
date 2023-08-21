import React, { createContext, useEffect, useState } from "react";
// import {fetchFilms} from '../api'
export const FilmsContext = createContext();
import axios from "axios";

const FilmsContextProvider = ({ children }) => {
  const [films, setFilms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const API_BASE_URL = "http://localhost:3000";
  const fetchFilms = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/films`);
      return response.data;
    } catch (error) {
      console.error("Filmler alınırken bir hata oluştu:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchFilms().then((data) => setFilms(data));
  }, []);

  const categories = ["Tümü", "Aksiyon", "Drama", "Komedi"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredFilms =
    selectedCategory === "Tümü"
      ? films
      : films.filter((film) => film.category === selectedCategory);

  const contextValue = {
    handleCategoryChange,
    filteredFilms,
    categories,
  };
  return (
    <FilmsContext.Provider value={contextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
