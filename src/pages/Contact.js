const Contact = () => {
  return (
    <section id="contact" className="py-5 mb-5">
      <hr/>
      <div className="container mt-5">
      <p className="cairo-h2 text-center">CONTACTO</p>
      <div className="row text-center">
        <div className="col-md-4 mt-5 mb-5">
          <i className="fa-solid fa-envelope fa-2x"></i>
          <p className="text-primary">cacs1986@gmail.com</p>
        </div>
        <div className="col-md-4 mt-5 mb-5">
          <i className="fa-solid fa-phone fa-2x"></i>
          <p className="text-primary">+54-11-37816643</p>
        </div>
        <div className="col-md-4 mt-5 mb-5">
          <i className="fa-solid fa-share-alt fa-2x"></i>
          <p>
            <a href="https://www.linkedin.com/in/carla-colina" target="_blank">LinkedIn</a> 
          </p>
        </div>
      </div>
      </div>
</section >

    );
  }
export default Contact;