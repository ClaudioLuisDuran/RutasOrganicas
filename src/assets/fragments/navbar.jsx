import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Social from '../fragments/social';

const navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Actualizar el estado isMobileMenuOpen según el ancho de la pantalla
      if (window.innerWidth <= 991) {
        setIsMobileMenuOpen(false); // Para ocultar el menú en pantallas pequeñas
      }
    };

    // Agregar el controlador de eventos de redimensionamiento
    window.addEventListener("resize", handleResize);

    // Eliminar el controlador de eventos al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return(
<>
<Social />

{/* <nav id="navbar" className="navbar">
  <ul className={`navbar-menu ${isMobileMenuOpen ? "show" : ""}`}>
          <li><a className="nav-link" href="/">Home</a></li>
          <li><Link className="nav-link" to="/vision">Visión</Link></li>
          <li><Link className="nav-link" to="/ventajas">Ventajas</Link></li>
          <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
          <li><Link className="nav-link" to="/faqs">F.A.Q. :: Nosotros</Link></li>
          <li><Link className="nav-link" to="/contact">Contacto</Link></li>     
        </ul>
        <i
    className="bi bi-list mobile-nav-toggle"
    onClick={toggleMobileMenu}
  ></i>
      </nav> */}

<div className="desktop-menu">
        <nav id="navbar" className="navbar">
          <ul>
          <li><a className="nav-link" href="/">Home</a></li>
          <li><Link className="nav-link" to="/faqs">Nosotros</Link></li>
          <li><Link className="nav-link" to="/definiciones">Definiciones</Link></li>
          <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
          <li><Link className="nav-link" to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>

      {/* Menú colapsado para dispositivos móviles */}
      <div className="mobile-menu">
        <nav id="mobile-navbar" className="navbar-mobile">
          <ul className={`navbar-menu ${isMobileMenuOpen ? "show" : ""}`}>
          <li><a className="nav-link" href="/">Home</a></li>
          <li><Link className="nav-link" to="/vision">Visión</Link></li>
          <li><Link className="nav-link" to="/ventajas">Ventajas</Link></li>
          <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
          <li><Link className="nav-link" to="/faqs">F.A.Q. :: Nosotros</Link></li>
          <li><Link className="nav-link" to="/contact">Contacto</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileMenu}></i>
        </nav>
      </div>

     {/*  
     <!-- <li><a href="blog.html">Blog</a></li>
      <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul> 
      </li>--> 
      */}
  {/* <!-- .navbar --> */}
  </>
);
};

export default navbar;