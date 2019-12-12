import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Login from './components/Login';
import Registry from './components/Registry';
import UpdateUser from './components/UpdateUser';
import StoreView from './components/StoreView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router'
import Store from './components/Store';

class App extends Component
{
  //Constructor
  constructor(props)
  {
    super(props);
  }

  //Render
  render()
  {    
      return(
        <BrowserRouter>
          <Switch>
            <Route 
              path='/alejoo'
              component={Login}/>
            <Route path='/index' exact />
            <Route path='/post/:id' />
            <Route
              path="/stores"
              component={StoreView} />
          </Switch>
        </BrowserRouter>
      ); 
  }
}

export default App;
