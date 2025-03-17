import React from 'react';
import { Link } from 'react-scroll';
import "../App.css";

const Nav = () => {
    return (
<nav className="navbar navbar-expand-lg border-0" style={{ backgroundColor: '#3CB371' }}>
  <div className="container">
    <div className="navbar-brand fw-bold barriecito text-white">
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" style={{ height: '40px' }}  />Carla Colina
    </div>
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

    {/* Menú de navegación */}
    <div className="collapse navbar-collapse justify-content-center" id="navbarColor03">
      <ul className="navbar-nav text-center">
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="about" smooth={true} duration={500} offset={-70}>Sobre mí</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="projects" smooth={true} duration={500} offset={-70}>Proyectos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="contents" smooth={true} duration={500} offset={-70}>Contenidos y Metodología</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="contact" smooth={true} duration={500} offset={-70}>Contacto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default Nav;