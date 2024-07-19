import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from "react-transition-group";

import IndexPage from './assets/components/index.jsx';
import DefinicionesPage from './assets/components/definiciones.jsx';
import FaqPage from './assets/components/nosotros.jsx';
import Portfolio from './assets/components/portfolio.jsx';
import Contact from './assets/components/contact.jsx';

import Wines from './products/wine_1.jsx';
import Yerbas from './products/yerbas_1.jsx';
import Aceites from './products/aceitesybebidas_1.jsx';
import Dulces from './products/dulces_1.jsx';
import Harinas from './products/harinascerealesgranos_1.jsx';
import FrutosyEspecias from './products/frutosecyespecias_1.jsx';
import Cosmetica from './products/cosmetica_1.jsx';

import FliaCecchin from './clients/cechin/fliaCecchin.jsx';
import DomainBousquet from './clients/domainBousquet/domaiBousquet.jsx';

import './assets/css/style.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/boxicons/css/boxicons.min.css';
import './App.css';
function App() {
  useEffect(() => {
    const scriptPaths = [
      '/src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '/src/assets/vendor/php-email-form/validate.js',
    ];

    scriptPaths.forEach((path) => {
      const script = document.createElement('script');
      script.src = path;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      scriptPaths.forEach((path) => {
        const script = document.querySelector(`script[src="${path}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <TransitionGroup className="container">
      <CSSTransition
        appear={true}
        key={location.key}
        timeout={{ enter: 400, exit: 200 }}
        classNames="fade"
      >
        <div className="container">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/definiciones" element={<DefinicionesPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/contact" element={<Contact />} />

            {/* Secciones Productos */}
            <Route path="/wines" element={<Wines />} />
            <Route path="/yerbas" element={<Yerbas />} />
            <Route path="/aceites" element={<Aceites />} />
            <Route path="/dulces" element={<Dulces />} />
            <Route path="/harinas" element={<Harinas />} />
            <Route path="/fruconesp" element={<FrutosyEspecias />} />
            <Route path="/cosmetica" element={<Cosmetica />} />

            {/* Clientes */}
            <Route path="/fliaCecchin" element={<FliaCecchin />} />
            <Route path="/domainBousquet" element={<DomainBousquet />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}
export default App