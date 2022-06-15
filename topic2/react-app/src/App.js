
import React from 'react';
import './App.css';
import Box, { sayHello, sayPrivet } from './Box';
// default olmadan etmek ucun {} icinde boxu yaziriq
import bmwImage from "./img/bmw-m8-coupe-onepager-sp-desktop.jpg.asset.1642519172452.jpg"
import data from "./data.json"

class App extends React.Component {

  render() {


  return (
    <div className="App">
      <Box data={data} title="Huseyn" age={22}/>
      {sayHello()}
      {sayPrivet()}
      <img src={bmwImage} alt="test"/>
    </div>
  );

  }

}

export default App;
