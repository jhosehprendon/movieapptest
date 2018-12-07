import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/:id" component={MovieDetail} />
            <Route path='/' component={MovieList} />
          </Switch>  
      </div>
    );
  }
}

export default App;
