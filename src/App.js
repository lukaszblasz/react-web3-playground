import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import store from './config/store';

import HomeComponent from './pages/home/home';
import DetailsComponent from './pages/details/details';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Link to='/'>Home</Link>
          <Link className='details' to='/details'>Details</Link>
          <Provider store={store}>
            <Switch>
              <Route exact path='/' component={HomeComponent}/>
              <Route path='/details' component={DetailsComponent}/>
            </Switch>
          </Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
