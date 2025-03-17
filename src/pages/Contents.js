import React from 'react';

const Contents = () => {
  return (
    <section id="contents">
      <div className="row m-5">
        <h2 className=" mt-5 barriecito">Contenidos y Metodologías</h2>
        <p className='lead'>S
          Como docente de escuela Técnica no solo se trata de transmitir conocimientos, también es actúar
          como guía, facilitador y mentor para que los estudiantes desarrollen habilidades técnicas y competencias 
          necesarias en el mundo digital.
        </p>
        <h4 className='barriecito mt-3'>
          <i className="fa-solid fa-angles-right me-2 text-success"></i>&nbsp;&nbsp;
          Contenidos
        </h4>
        
        <div className="container">
          <div className="row mt-5 mb-5">

            <div className="col">
              <p><i className="fa-solid fa-angles-right me-2"></i>&nbsp;&nbsp;
              <strong className='text-success'>Programación Estructurada y Lógica Computacional</strong></p>
              <li>Diagramación lógica y resolución de problemas.</li>
              <li>Estructuras de control, vectores, matrices y funciones.</li>
              <li>Lenguajes: C++ y C# en consola, enfocados en lógica y estructuras de datos.</li>
            </div>

            <div className="col">
            <p><i className="fa-solid fa-angles-right me-2"></i>&nbsp;&nbsp;
            <strong className='text-success'>Sistemas Operativos</strong></p>
            <li>Conceptos Básicos</li>
            <li>Gestión de Procesos</li>
            <li>Gestion de Memoria</li>
            <li>Uso y gestión de la terminal en Linux</li>
            </div>

          </div>

          <div className="row mt-5">

            <div className="col">
            <p><i className="fa-solid fa-angles-right me-2"></i>&nbsp;&nbsp;
            <strong className='text-success'>Herramientas Ofimáticas</strong></p>
              <li>Manejo de Word, Excel y PowerPoint.</li>
              <li>Presentación de informes monografías, etc.</li>
            </div>

            <div className="col">
            <p><i className="fa-solid fa-angles-right me-2"></i>&nbsp;&nbsp;
            <strong className='text-success'>Desarrollo Web</strong></p>
            <li>JavaScript y React.</li>
            <li>Creación de interfaces interactivas y dinámicas.</li>
            </div>

          </div>

          <div className="row mt-5 mb-5">

            <div className="col">
            <p><i className="fa-solid fa-angles-right me-2"></i>&nbsp;&nbsp;
            <strong className='text-success'>Robótica</strong></p>
              <li>Introducción a Arduino y sensores.</li>
              <li>Programación de hardware para proyectos prácticos (automatización y robótica educativa).</li>
            </div>

            <div className="col">
            <p><i className="fa-solid fa-angles-right me-2"></i><strong className='text-success'>Talleres de Iniciación a la Programación en Primaria</strong></p>
            <li>Scratch como herramienta de programación visual</li>&nbsp;&nbsp;
            <li>Metodología <strong>STEAM</strong></li>
            </div>

          </div>

        </div>
        <hr/>
        <h4 className='barriecito mt-3'>
          <i className="fa-solid fa-angles-right me-2 text-info"></i>&nbsp;&nbsp;
          Metodologías
        </h4>

        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col">
              <p>
                <i className="fa-solid fa-angles-right me-2"></i>&nbsp;&nbsp;
                <strong className='text-info'>Aprendizaje Basado en Proyectos (ABP)</strong>
              </p>
              <p>
                Esta metodología permite a los estudiantes adquirir conocimientos y competencias mediante 
                la elaboración de proyectos que responden a problemas reales. Fomenta el pensamiento crítico, 
                la comunicación y la colaboración. 
              </p>
            </div>

            <div className="col">
              <p>
                <i className="fa-solid fa-angles-right me-2"></i>&nbsp;&nbsp;
                <strong className='text-info'>Aprendizaje Cooperativo</strong>
              </p>
              <p>
              Consiste en agrupar a los estudiantes para que trabajen juntos en la resolución de problemas, 
              aplicando conocimientos y aprendiendo de manera conjunta. Promueve la interacción, el apoyo mutuo 
              y el desarrollo de habilidades sociales. 
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <p>
                <i className="fa-solid fa-angles-right me-2"></i>&nbsp;&nbsp;
                <strong className='text-info'>Gamificación</strong>
              </p>
              <p>
              Implica la integración de dinámicas de juego en entornos educativos para potenciar la motivación, 
              la concentración y el esfuerzo. Busca hacer el aprendizaje más atractivo y participativo.
              </p>   
            </div>

            <div className="col">
              <p>
                <i className="fa-solid fa-angles-right me-2"></i>&nbsp;&nbsp;
                <strong className='text-info'>Aprendizaje basado en el conocimiento</strong>
              </p>
              <p>
                Este método permite desarrollar el pensamiento más allá de la memorización, a la vez que 
                promueve un pensamiento eficaz y les enseña a los estudiantes a trabajar con la información 
                para mejorar su capacidad de análisis y argumentación.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contents;