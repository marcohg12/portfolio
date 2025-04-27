import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor: "#ffffff"}}>
            <div className="container">

                <Link className="navbar-brand" to="/">Marco Herrera González</Link>
        
                {/* Botón para el menú de hamburguesa en móviles */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-me">Sobre mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;