import React, { Component } from 'react';


class Login extends Component
{

    render()
    {
      return(
        //   <div>
        //       jsjakaiank
        //   </div>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/> 
            </div>
            <div className="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        

      );
    }


}

export  default Login;



