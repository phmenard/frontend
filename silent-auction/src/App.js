import "./css/index.css";
import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="body">
      <Route exact path='/'>
        <MainContainer />
      </Route>
      <Route exact path='/signup'>
        <p>Hello World !!</p>
      </Route>
      <Route exact path='/create'>
        <p>create auction</p>
      </Route>


    </div>
  );
}

export default App;
