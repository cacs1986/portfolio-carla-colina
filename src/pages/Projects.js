const Projects = () => {
  return (
    <section id="projects">
      <div className="m-5">
        <h2 className="barriecito my-5">Proyectos educativos y personales</h2>
        <div className="container-projects">
          <div className="card border-success">
            <img src={`${process.env.PUBLIC_URL}/images/projects/casa-auto.png`} alt="..." />
            <div className="overlay">
              <span className="text">Casa automatizada</span>
            </div>
          </div>
          <div className="card border-warning">
            <img src={`${process.env.PUBLIC_URL}/images/projects/animatronic.png`} alt="..." />
            <div className="overlay">
              <span className="text">Animatrónico: Mr Cake</span>
            </div>
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/projects/alarma.png`} alt="..." />
            <div className="overlay">
              <span className="text">Sistema de Alarma</span>
            </div>
          </div>
          <div className="card border-info">
            <img src={`${process.env.PUBLIC_URL}/images/projects/auto-controlBT.jpg`} alt="..." />
            <div className="overlay">
              <span className="text">Auto control Bluetooth</span>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12">
            <h2 className="barriecito my-5">BLOG Eco de Vida - en desarrollo</h2>
          </div>
          <div className="col-12">
            <div className="ratio ratio-16x9 rounded-lg" style={{ maxWidth: '100%', height: '500px' }}>
              <iframe
                src="https://www.youtube.com/embed/rf8UHnBquQE?autoplay=1"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
export default Projects;