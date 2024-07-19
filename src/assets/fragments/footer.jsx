import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-7 col-md-7 footer-contact">
              <h3>Rutas Orgánicas</h3>
              <p>
                Buenos Aires - Argentina <br />
                <strong>Phone:</strong> +54 11 3300 1010<br />
                <strong>Email:</strong> contacto@rutasorganicas.com<br />
                <strong>Email:</strong> info@rutasorganicas.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-5 footer-links">
              <h4>Enlaces rápidos</h4>
              <ul>
                <li><Link className="bx bx-chevron-right nav-link" to="/">Home</Link></li>
                <li><Link className="bx bx-chevron-right nav-link" to="/faqs">Nosotros</Link></li>
                <li><Link className="bx bx-chevron-right" to="/definiciones">Definiciones</Link></li>
                <li><Link className="bx bx-chevron-right" to="/portfolio">Portfolio</Link></li>
                <li><Link className="bx bx-chevron-right" to="/contact">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-lg-flex py-4">

        <div className="me-lg-auto text-center text-lg-start">
          <div className="copyright">
            &copy; Copyright <strong><span><a href="https://www.rutasorganicas.com">Rutas Orgánicas</a></span></strong>. All Rights Reserved.
          </div>
          <div className="credits">
            &copy; Developer <a href="https://github.com/ClaudioLuisDuran" target="_blank">Claudio Durán</a>
          </div>
          <div className="credits">
            {/*  <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
            {/* <!-- Pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexor-free-multipurpose-bootstrap-template/ --> */}
            Designed with <a href="https://vitejs.dev/" target="_blank">React Vite</a>, <a href="https://v2.chakra-ui.com/" target="_blank">Chakra</a>, <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>.
            </div>
          <div className="credits">
            Thanks <a href="https://www.flaticon.es/">Icons Slamlabs - Flaticon</a>
          </div>
          <div className="credits">
            Credits Images: <a href="https://www.freepik.es/"> Freepik.es</a>
          </div>
        </div>
      {/*   <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div> */}
      </div>

    </>

  )
};
export default Footer;