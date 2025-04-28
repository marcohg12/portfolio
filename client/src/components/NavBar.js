import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    
    const handleLinkClick = () => {
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse.classList.contains("show")) {
            const toggleButton = document.querySelector(".navbar-toggler");
            toggleButton.click();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#ffffff" }}>
            <div className="container">
                
                <Link className="navbar-brand" to="/">Marco Herrera González</Link>

                {/* Botón para el menú de hamburguesa en móviles */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-me" onClick={handleLinkClick}>Sobre mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" onClick={handleLinkClick}>Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contacto</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
