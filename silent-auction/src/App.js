import "./css/index.css";
import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import SignUp from './components/forms/SignUp';

function App() {
  return (
    <div className="body">
      <Route exact path='/'>
        <MainContainer />
      </Route>
      <Route exact path='/signup'>
        <SignUp />
      </Route>
      <Route exact path='/create'>
        <p>create auction</p>
      </Route>


    </div>
  );
}

export default App;
