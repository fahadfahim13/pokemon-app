import React from 'react';
import './App.css';
import ShowPokemons from "./Components/General/ShowPokemons";
import Navigation from "./Components/General/Navigation";

function App() {

  return (
    <div className="App">
        <Navigation />
        <ShowPokemons />
    </div>
  );
}

export default App;
