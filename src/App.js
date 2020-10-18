import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Top10 from './components/Top10/Top10';
import DetailedMovie from './components/DetailedMovie/DetailedMovie';
import DetailedSeries from './components/DetailedSeries/DetailedSeries';
import SearchResults from './components/SearchResults/SearchResults';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/:itemType/top10" component={Top10} exact/>
          <Route path="/:itemType/search" component={SearchResults} exact/>
          <Route path="/movie/:movieId" component={DetailedMovie} exact/>
          <Route path="/tv/:seriesId" component={DetailedSeries} exact/>
          <Route path="/reto4-what-can-i-watch/">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
