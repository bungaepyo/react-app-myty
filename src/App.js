import React from 'react';
import './App.css';
import Home from './routers/Home';
import {HashRouter, Route} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      {/* <Navigation /> */}
      <Route path="/" exact={true} component={Home}/>
      {/* <Route path="/about" component={About}/> */}
      {/* <Route path="/movie-detail" component={Detail}/> */}
    </HashRouter>
  );
}

export default App;
