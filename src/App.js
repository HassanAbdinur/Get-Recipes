import React, {useEffect, useState} from 'react';
import './App.css';
import { async } from 'q';

const App = () => {
  const APP_ID = `${process.env.REACT_APP_RECIPE_API_ID}`
  const APP_KEY = `${process.env.REACT_APP_RECIPE_API_KEY}`

useEffect(() => {

}, []);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  console.log(data);
}

  return(
    <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
    </div>
  );
}

export default App;
