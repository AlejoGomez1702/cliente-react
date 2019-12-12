import React, { Component } from 'react';
import Store from './Store';

class StoreView extends Component
{
  //Constructor
  constructor(props)
  {
    super(props);
    this.state = {
      stores: [],
      categories: [],
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
        stores: json.stores,
      })
    })
  }

  //Render
  render()
  {
    var { isLoaded, stores} = this.state;
    
    if(!isLoaded)
    {
      return <div>Loading...</div>
    }
    else
    {
      return(
        <div className="container-fluid">
          <div className="App">
            <ul>
              {stores.map(store => (
                  <li key={store.id}>
                      <Store name = { store.name } 
                      category = { store.category }
                      user = { store.user }
                      created_at = { store.created_at }/>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default StoreView;
