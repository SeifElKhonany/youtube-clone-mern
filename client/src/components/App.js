import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Upload from './pages/Upload';
import Video from './pages/Video';
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/upload' component={Upload}/>
          <Route exact path='/video' component={Video}/>
        </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
