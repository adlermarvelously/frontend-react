import React, { useContext } from "react";
import { FilmsContext } from "../context/FilmsContext";
import Card from "./Card";

const FilmList = () => {
    const {filteredFilms} = useContext(FilmsContext) 
  return (
    <>
      {filteredFilms.map((film) => (
        <Card key={film.id} film={film} />
      ))}
    </>
  );
};

export default FilmList;
