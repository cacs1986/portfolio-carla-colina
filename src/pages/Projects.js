const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <p className="cairo-h2 text-center">PROYECTOS EDUCATIVOS</p>

        <div className="row">
          <div className="col mt-5 mb-5 d-flex justify-content-center">
            <div className="card border-0" style={{ width: "23rem" }}>
              <img src= {`${process.env.PUBLIC_URL}/images/projects/casa-auto.png`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center text-primary fw-bold">Casa automatizada con ARDUINO</h5>
                <p className="card-text">
                  Cuenta con LEDs en cada espacio que se encienden con pulsador o Bluetooth,
                  alarma con sensor de movimiento, detector de gases peligrosos e incendios,
                  medidor de temperatura y humedad.
                </p>
              </div>
            </div>
          </div>
          <div className="col mt-5 mb-5 d-flex justify-content-center">
            <div className="card border-0" style={{ width: "23rem" }}>
              <img src={`${process.env.PUBLIC_URL}/images/projects/animatronic.png`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center text-primary fw-bold">Animatronic con ARDUINO</h5>
                <p className="card-text">
                  Mr. CupCake de FNAF, el movimiento de ojos y boca son controlados con Joystick Analógico.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col mt-5 mb-5 d-flex justify-content-center">
            <div className="card border-0" style={{ width: "23rem" }}>
              <img src={`${process.env.PUBLIC_URL}/images/projects/alarma.png`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center text-primary fw-bold">Alarma de Seguridad con ARDUINO</h5>
                <p className="card-text">
                La alarma se activa y desactiva introduciendo un código de seguridad de 4 dígitos, el cual puede
                  ser modificado si es requerido, cuenta con sensor de movimiento que al detectar disparara el sonido
                  de una "sirena".

                </p>
              </div>
            </div>
          </div>

          <div className="col mt-5 mb-5 d-flex justify-content-center">
            <div className="card border-0" style={{ width: "23rem" }}>
              <img src={`${process.env.PUBLIC_URL}/images/projects/auto-controlBT.jpg`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center text-primary fw-bold">Auto control Bluetooth con ARDUINO</h5>
                <p className="card-text">
                Autito controlado por Bluetooth, a través de una aplicación para dispositivos móviles. Cuenta
                  con la opción autonomía que le permite desplazarse sin guía gracias al sensor de ultrasonido que detectar 
                  obstáculos.  
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row m-5">
          <h2 className="text-center text-primary fw-bold mb-4">BLOG Eco de Vida - en producción</h2>
          <small>(personal - no educativo)</small>
          <div className="col mt-5 mb-5 d-flex justify-content-center">
            <div className="ratio ratio-16x9 rounded-lg">
              <iframe
                src={`https://www.youtube.com/embed/rf8UHnBquQE?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
export default Projects;