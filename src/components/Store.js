import React, { Component } from 'react';

class Store extends Component
{
   //Constructor
  constructor(props)
  {
    //name || category[] || user[] || created_at  
    super(props);     
  }

  //Render
  render()
  {
    return(
        <div className="row">
            <div className="col-sm">
                <div className="card text-center" style={{width: "18rem", margintop: "70px"}}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">Categoria: {this.props.category.name}</p>
                        <p className="card-text">Administrador: {this.props.user.name}</p>
                        <p className="card-text">Fecha de Creación: {this.props.created_at}</p>
                        <a href="#" class="btn btn-primary">INGRESAR</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Store;
