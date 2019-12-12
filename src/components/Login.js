import React, { Component } from 'react';


class Login extends Component
{

    render()
    {
      return(

        
            <div  className="container">
                <form>   
                    <div className="form-group">
                        <label for="exampleInputEmail1">Correo Electronico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/> 
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Recordar</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Ingresar</button>
                </form>
            </div>
            
        

      );
    }


}

export  default Login;



