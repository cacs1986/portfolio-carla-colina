import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-primary text-white py-4 mt-5">
            <div className="container ">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; 2025 Mi Portfolio. Todos los derechos reservados.</p>
                    </div>

                    <div className="col-md-6 text-center text-md-end">
                        <a href="mailto:cacs1986@gmail.com" className="text-white me-3">
                            <i className="fa-solid fa-envelope"></i> cacs1986@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/tu-perfil" target="_blank" className="text-white me-3">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
