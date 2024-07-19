import React, { useEffect } from 'react';
import { Box, Fade, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topbar from '../assets/fragments/topbar';
import logoRO from '../assets/images/others/wwww.png';
import Footer from '../assets/fragments/footer';
import NavBar from '../assets/fragments/navbar';
import Vino1 from '../assets/images/portfolio/vino-1.jpg';
import Vino2 from '../assets/images/portfolio/vino-2.jpg';
import Vino3 from '../assets/images/portfolio/vino-3.jpg';
import Icon from '../assets/images/btns/btnLigthGreen_1.jpg';
import LogoCecchin from '../clients/cechin/logoCecchin.png';
import LogoDomain from '../clients/domainBousquet/logoDomainBousquet.webp';

const FadeInWhenVisible = ({ children, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 35 : 100 }}
      transition={{ duration: 0.7, delay }}
    >
      <Fade in={inView}>
        <Box>{children}</Box>
      </Fade>
    </motion.div>
  );
};

const ScrollVisibleElement = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Umbral de visibilidad del 50%
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

const wine_1 = () => {

  useEffect(() => {
    // Scrollea la página hasta la parte superior
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/"><img src={logoRO} alt="Rutas Orgánicas" className="img-fluid" />
              <p style={{ marginTop: '-0.5rem', marginLeft: '0.5rem', color: 'darkgreen', fontSize: '0.875rem' }}>
                Raíces orgánicas, evolución consciente.
              </p>
            </a>
          </div>
          {/*  <!-- NavBar --> */}
          <NavBar />
        </div>
      </header>
      {/* <!-- End Header --> */}

      <main id="main">

        {/*  <!-- ======= Breadcrumbs ======= --> */}
        <FadeInWhenVisible delay={0.2}>
          <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
              <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li>Vinos orgánicos</li>
              </ol>
              <h2>Vinos orgánicos</h2>
              <img src={Icon} style={{
                float: 'right',
                width: '50px',
                marginLeft: '10px',
                borderRadius: '50%',
              }} />
            </div>
          </section>
        </FadeInWhenVisible>
        {/* <!-- End Breadcrumbs --> */}

        {/*  <!-- ======= Portfolio Details Section ======= --> */}
        <ScrollVisibleElement>
          <FadeInWhenVisible delay={0.5}>
            <section id="portfolio-details" className="portfolio-details">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-8">
                    <div className="portfolio-details-slider">
                      <div className="align-items-center">
                        <Slider {...settings}>
                          <div>
                            <img src={Vino1} alt="" />
                          </div>
                          <div>
                            <img src={Vino2} alt="" />
                          </div>
                          <div>
                            <img src={Vino3} alt="" />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    {/* <div className="portfolio-description"> */}
                    {/* <h3>Descubre lo puro. Siente la libertad.</h3> */}
                    <h4>El vino como la vida, mejora compartido. Su complejidad y la riqueza de sus taninos reflejan la profundidad de los lazos, celebra recuerdos, crea nuevas historias.
                    </h4>
                    <h5>El vino se convierte en testigo de momentos únicos. Cada sorbo, como cada risa; nos recuerdan la importancia de vivir, amar y compartir sin reservas. El vino orgánico es una vuelta a los orígenes. Este tipo de vino exige mas observación de la naturaleza, más vigilancia de la viña y su entorno.
                    </h5>
                    <h5>Los conocimientos avanzados de hoy respecto de técnicas y cuidados, ayudan a que el vino orgánico sea todo un espectáculo para los sentidos.
                    </h5>
                    {/* </div> */}
                  </div>
                  <div className="logoClient-container">
                    <Link to="/fliaCecchin" className="logoClient"><img src={LogoCecchin} /></Link>
                    <Link to="/domainBousquet" className="logoClient"><img src={LogoDomain} /></Link>
                  </div>
                  <Link to="/portfolio">
                    <Button variant='solid' colorScheme='green'>
                      Ver todo el Portfolio de productos
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
            {/* <!-- End Portfolio Details Section --> */}
          </FadeInWhenVisible>
        </ScrollVisibleElement>
      </main>{/* <!-- End #main --> */}

      {/* ======= Footer ======= --> */}
      <ScrollVisibleElement>
        <FadeInWhenVisible delay={0.9}>
          <footer id="footer" className='pie'>
            <Footer />
          </footer>
          {/*   <!-- End Footer --> */}

          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
            className="bi bi-arrow-up-short"></i></a>
        </FadeInWhenVisible>
      </ScrollVisibleElement>
    </>
  );
};

export default wine_1;