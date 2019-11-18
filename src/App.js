import React from 'react';
import Card from './Card';



function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
      <div className="appheader">
        <h3>Welcome to Monk!</h3>
        <img src={require ('./assets/Scribe.svg')} alt='' width='100%' height='70%'></img>
      </div>
      <div className="appbody">
        <Card/>
      </div>
    </div>
  );
}

export default App;
