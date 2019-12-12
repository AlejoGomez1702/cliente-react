import React, { Component } from 'react';

class UpdateUser extends Component
{

  render()
  {
    return(
        
      <div  className="container">
          <form>   
              <div className="form-group">
                  <label for="exampleInputEmail1">Nombre</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                  {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div className="form-group">
                  <label for="exampleInputEmail1">Correo Electronico</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                  {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div className="form-group">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/> 
              </div>
              <button type="submit" class="btn btn-primary">Actualizar</button>
          </form>
      </div>

    );
  }
}

export default UpdateUser;
