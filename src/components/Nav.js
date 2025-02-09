import React from 'react';
import { Link } from 'react-scroll';
import "../App.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary  border-0" data-bs-theme="dark">
            <Link className="navbar-brand pacifico-regular ms-3 text-white" to="about" smooth={true} duration={500} offset={-70}>Carla Colina Sosa</Link>
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor03"
                    aria-controls="navbarColor03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <Link className="nav-link  fw-semibold text-white" to="about" smooth={true} duration={500} offset={-70}>Sobre mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  fw-semibold text-white" to="projects" smooth={true} duration={500} offset={-70}>Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  fw-semibold text-white" to="contents" smooth={true} duration={500} offset={-70}>Contenidos y Metodología</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  fw-semibold text-white" to="contact" smooth={true} duration={500} offset={-70}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;