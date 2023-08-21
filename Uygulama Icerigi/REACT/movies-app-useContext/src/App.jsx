import React from "react";
import "./App.css";
import FilmCategories from "./components/FilmCategories";
import FilmList from "./components/FilmList";
import FilmsContextProvider from "./context/FilmsContext";

const App = () => {
  return (
    <FilmsContextProvider>
      <div className="app">
        <FilmCategories />
        <div className="films">
          <FilmList />
        </div>
      </div>
    </FilmsContextProvider>
  );
};

export default App;
