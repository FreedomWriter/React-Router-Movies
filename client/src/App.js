import React, { useState } from "react";
import { Route } from "react-router-dom";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, { movie, isSaved: true }]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <MovieCard /> */}
      <Route
        exact
        path="/movies"
        component={MovieList}
        props={addToSavedList}
      />
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
