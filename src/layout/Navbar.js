import React from 'react';

import {Link, Route, Router} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const Navbar=()=>{

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">ClienteCarrito</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/">IniciarSesión <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Registrarse</a>
                    <a class="nav-item nav-link disabled" href="#" aria-disabled="true">Tiendas</a>
                    <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                   
                </div>
            </div>
        </nav>
    );
    
};
export  default Navbar;