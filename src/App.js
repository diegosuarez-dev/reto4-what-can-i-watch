import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Top10 from './components/Top10/Top10';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/:itemType/top10" component={Top10} exact/>
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
