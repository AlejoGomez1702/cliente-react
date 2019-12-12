import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
<<<<<<< HEAD
import Login from './components/Login';
import Registry from './components/Registry';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {Link, Route, Router} from 'react-router';
// import { Link } from 'react-router'

=======
import Store from './components/Store';
>>>>>>> origin/master

class App extends Component
{
  //Constructor
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  //DidMount
  componentDidMount()
  {
    fetch('http://localhost:8000/api/stores')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json.stores,
      })
    })
  }

  //Render
  render()
  {
    var { isLoaded, items } = this.state;
    
    if(!isLoaded)
    {
      return <div>Loading...</div>
    }
    else
    {
      return(

        <Router>
          <Route
              component={Registry}
              path="/"
          />
           <Route
              component={Navbar}
              path="/nav/"
          />
      </Router>,

        
          // <Navbar/>
       
          <div className="container-fluid"> 
            <div className="App">
            <ul>
              {items.map(item => (
                  <li key={item.id}>
                      <Store name={item.name} />
                  </li>
              ))}
            </ul>
          
            {/* <a href="/n">----</a> */}
          </div>
        </div> 
  
      );
    }
  
  }


}

export default App;
