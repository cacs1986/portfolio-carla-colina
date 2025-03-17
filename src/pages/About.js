import React, { useState } from 'react';
import { motion } from "framer-motion";

const About = () => {
  const [hover, setHover] = useState(false);

  return (
    <section id="about">
      <div className="m-3">

      <div className='row g-0'>
  <div className="col-12 col-md-4" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    <div className={`image-container ${hover ? 'hover' : ''}`}></div>
  </div>
  <div className="col-12 col-md-7 mt-3 text-content">
    <h4 className='barriecito text-success'>SOBRE MÍ</h4>
    <p>
      ¡Hola! Soy Carla, actualmente me desempeño como docente en distintas áreas de informática en todos
      los niveles de primaria, secundaria media y secundaria técnica.<br />
      Tengo formación técnica en Análisis de Sistemas y cuento con capacitación pedagógica en formación
      docente.<br />En el presente curso el primer año de la carrera para la Técnicatura Universitaria en Programación en la Universidad
      Tecnológica Nacional (UTN).<br />
      Además de mi amor por la enseñanza y la tecnología, me considero una persona creativa, apasionada tanto
      por el diseño como por la programación.<br />
      Ser educadora es una parte esencial de mi vida, enseñar me permite no solo ser guía y testigo de la construcción del conocimiento, sino también aportar
      mi grano de arena a la sociedad, y ese es mi compromiso con el mundo. Para mí, ser docente significa asumir el compromiso de formar, desarrollar e impulsar la creatividad, el pensamiento crítico y lógico de los estudiantes.
      <br />Para alcanzar mis metas y objetivos, es fundamental mantenerme en constante actualización, buscar y
      crear nuevas estrategias y herramientas, y descubrir tecnologías innovadoras que me permitan desarrollar
      nuevas habilidades.
    </p>
  </div>
</div>

        <p className="m-4"><h2 className='barriecito'>Mis habilidades y conocimientos</h2></p>

        <div className="row text-center habilidades">

          <div className='col mt-4'>
            <div className="btn-group">
              <motion.button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Desarrollo Web&nbsp;&nbsp;
                <i className="fa-solid fa-laptop-code"></i>
              </motion.button>
              <div className="dropdown-menu">
                <span className="dropdown-item">
                  <i className="devicon-react-original text-primary"></i> React
                </span>
                <span className="dropdown-item">
                  <i className="devicon-javascript-plain text-warning"></i> JavaScript
                </span>
                <span className="dropdown-item">
                  <i className="devicon-bootstrap-plain text-purple"></i> Bootstrap
                </span>
                <span className="dropdown-item">
                  <i className="devicon-nodejs-plain text-success"></i> Node.js
                </span>
                <span className="dropdown-item">
                  <i className="devicon-mysql-plain text-info"></i> MySQL
                </span>
              </div>
            </div>
          </div>

          <div className='col mt-4'>
            <div className="btn-group">
              <motion.button
                type="button"
                className="btn btn-success"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Lenguajes de Programación&nbsp;&nbsp;
                <i class="fa-solid fa-code"></i>
              </motion.button>
              <div className="dropdown-menu">
                <span className="dropdown-item">
                  <i className="devicon-c-plain text-primary"></i> C
                </span>
                <span className="dropdown-item">
                  <i className="devicon-cplusplus-plain text-info"></i> C++
                </span>
                <span className="dropdown-item">
                  <i className="devicon-csharp-plain text-purple"></i> C#
                </span>
                <span className="dropdown-item">
                  <i className="devicon-php-plain text-secondary"></i> PHP
                </span>
                <span className="dropdown-item">
                  <i className="devicon-javascript-plain text-warning"></i> JavaScript
                </span>
              </div>
            </div>
          </div>

          <div className='col mt-4'>
            <div className="btn-group">
              <motion.button
                type="button"
                className="btn btn-info"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Tecnología y Hardware&nbsp;&nbsp;
                <i className="fa-solid fa-microchip"></i>
              </motion.button>
              <div className="dropdown-menu">
                <span className="dropdown-item">
                  <i className="devicon-arduino-plain-wordmark text-info"></i> Arduino
                </span>
              </div>
            </div>
          </div>

          <div className='col mt-4'>
            <div className="btn-group">
              <motion.button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Diseño y Edición - Ofimática&nbsp;&nbsp;
                <i className="fa-solid fa-file-pen"></i>
              </motion.button>
              <div className="dropdown-menu">
                <span className="dropdown-item">
                  <i className="devicon-photoshop-plain text-info"></i> Photoshop
                </span>
                <span className="dropdown-item">
                  <i className="fa-regular fa-file-word text-primary"></i> Microsoft Word
                </span>
                <span className="dropdown-item">
                  <i className="fa-solid fa-file-excel text-success"></i> Microsoft Excel
                </span>
                <span className="dropdown-item">
                  <i className="fa-solid fa-file-powerpoint text-danger"></i> Microsoft PowerPoint
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>


    </section >
  );
}

export default About;



