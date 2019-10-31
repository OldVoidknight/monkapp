import React from 'react';
import Card from './Card';


function App() {
  return (
    <div className="App">
      <div className="appheader">
        Welcome to Monk!
        <img src={require ('./assets/Scribe.svg')} alt='' width='100%' height='100%'></img>
      </div>
      <div className="appbody">
        <Card/>
      </div>
    </div>
  );
}

export default App;
