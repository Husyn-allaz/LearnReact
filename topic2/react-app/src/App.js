
import React from 'react';
import './App.css';
import Box, { sayHello, sayPrivet } from './Box';
// default olmadan etmek ucun {} icinde boxu yaziriq

class App extends React.Component {

  render() {

  return (
    <div className="App">
      <Box title="Huseyn" age={22}/>
      {sayHello()}
      {sayPrivet()}
    </div>
  );

  }

}

export default App;
