import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/Navbar';

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
    fetch('https://api-carrito.herokuapp.com/api/stores/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
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
        <div className="container-fluid">
          <Navbar/>
          <div className="App">
            <ul>
              {items.map(item => (
                  <li key={item.id}>
                      {item.id} | {item.name} | {item.user_id}
                  </li>
              ))}
            </ul>
          </div>
        </div>

        
      );
    }
  
  }


}

export default App;
