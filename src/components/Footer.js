import React from 'react';
const Footer = () => {
    return (
        <footer className="text-white py-4 mt-5" style={{ backgroundColor: '#3CB371' }}>
            <div className="container ">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; 2025 Carla Colina Sosa. Todos los derechos reservados.</p>
                    </div>

                    <div className="col-md-6 text-center text-md-end">
                        <i className="fa-solid fa-envelope"></i>&nbsp;
                        <a href="mailto:cacs1986@gmail.com" className="text-white me-3">
                            cacs1986@gmail.com
                        </a>&nbsp;&nbsp;
                        <a href="https://linkedin.com/in/carla-colina" target="_blank" rel="noreferrer" className="text-white me-3">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>&nbsp;&nbsp;
                        <a href="https://github.com/cacs1986" target="_blank" rel="noreferrer" className="text-white">
                            <i className="fa-brands fa-github"></i>
                        </a>&nbsp;
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
