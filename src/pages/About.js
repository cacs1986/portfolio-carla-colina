import React from 'react';

const About = () => {
  return (
    <section className="container my-5" id="about">
      <div className="row align-items-center">

        <div className="col-md-4 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.png`}
            className="img-fluid"
            alt="Foto de Carla"
          />
        </div>

        <div className="col-md-8 d-flex flex-column justify-content-center text-center text-md-start">
          <h1 className="ms-2 cairo-h1">Técnico Analista de Sistemas</h1>
          <br />
          <h1 className="ms-2 cairo-h1">con Formación Pedagógica</h1>
        </div>
      </div>

      <div className="row text-center">
        <p className="cairo-h2">SOBRE MÍ</p>
        <p className="mb-5">
          <strong>Soy Carla</strong>, docente de informática con <strong>formación técnica en Análisis de Sistemas </strong>
          y <strong>capacitación pedagógica</strong> como formación docente.
          Trabajo en <strong>secundaria técnica</strong>, además de impartir talleres en <strong>escuelas primarias</strong>.
          Me apasiona el rol de educador, enseñar me permite ser guía y testigo de la construcción del conocimiento.
          Ser Docente es asumir el compromiso de formar, desarrollar  e impulsar  la <strong>creatividad</strong>, el <strong>
            pensamiento crítico</strong> y <strong>lógico</strong> de los estudiantes.
          Mi objetivo es <strong>mantenerme en constante actualización</strong>, crear nuevas estrategias, descubrir herramientas y tecnologías
          innovadoras que me permitan desarrollar nuevas habilidades.
        </p>
      </div>

      <div className="row mt-5">

        <div className="col mb-3">

          <div className="accordion" style={{ maxHeight: "400px" }}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button text-white bg-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseUno"
                  aria-expanded="false"
                  aria-controls="collapseUno">
                  <i className="fa-solid fa-code me-2"></i>Lenguajes de Programación
                </button>
              </h2>
              <div id="collapseUno" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <li>C++</li>
                  <li>C#</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="col mb-3">
        <div className="accordion" style={{ maxHeight: "400px" }}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button text-white bg-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCuatro"
                  aria-expanded="false"
                  aria-controls="collapseCuatro">
                  <i className="fa-solid fa-laptop-code me-2"></i>Desarrollo Web
                </button>
              </h2>
              <div id="collapseCuatro" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>
                    Frontend
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                  </p>
                  <p>Backend
                    <li>Node.js</li>
                    <li>Express</li>
                  </p>
                  <p>Bases de datos
                    <li>MySQL</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
        <div className="accordion" style={{ maxHeight: "400px" }}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button text-white bg-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseDos"
                  aria-expanded="false"
                  aria-controls="collapseDos">
                  <i className="fa-solid fa-microchip me-2"></i>Tecnología y Hardware
                </button>
              </h2>
              <div id="collapseDos" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <li>Arduino</li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
        <div className="accordion"style={{ maxHeight: "400px" }}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button text-white bg-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTres"
                  aria-expanded="false"
                  aria-controls="collapseTres">
                  <i className="fa-solid fa-pen-fancy me-2"></i>Diseño y Edición
                </button>
              </h2>
              <div id="collapseTres" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <li>Photoshop</li>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </section >
  );
}
export default About;
