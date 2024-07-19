import React,  from 'react';
import { Box, Fade, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logoRO from '../assets/images/others/wwww.png';
import Footer from '../assets/fragments/footer';
import NavBar from '../assets/fragments/navbar';
import Otros1 from '../assets/images/portfolio/otros-1.jpg';
import Otros2 from '../assets/images/portfolio/otros-2.jpg';
import Otros3 from '../assets/images/portfolio/otros-3.jpg';
import '../assets/css/style.css';

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

const otros = () => {

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
    autoplaySpeed: 3000
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
                <li>Únase a nuestra ruta</li>
              </ol>
              <h2>Únase a nuestra ruta</h2>
            </div>
          </section>{/* <!-- End Breadcrumbs --> */}
        </FadeInWhenVisible>

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
                            <img src={Otros1} alt="" />
                          </div>
                          <div>
                            <img src={Otros2} alt="" />
                          </div>
                          <div>
                            <img src={Otros3} alt="" />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-description">
                      <h2>Una ruta. Multitud de destinos.</h2>
                      <h5>¿Es usted un productor de alimentos orgánicos? No importa lo grande o pequeño que sea, podemos ayudarlo a llevar su produccción a la mesa de los amantes de lo natural.
                      </h5>
                      <h5>Queremos formar una red de productores para dar a conocer la inmensa y hasta ahora oculta red de producción natural y orgánica de nuestro pais.
                      </h5>
                      <h5>Somos la mejor oportunidad de negocios, actualización y networking del segmento orgánico. Contáctemos. Su futuro nos interesa.
                      </h5>
                    </div>
                  </div>
                  <Link to="/portfolio">
                    <Button variant='solid' colorScheme='green'>
                      Ver todo el Portfolio de productos
                    </Button>
                  </Link>
                </div>
              </div>
            </section>{/* <!-- End Portfolio Details Section --> */}
          </FadeInWhenVisible>
        </ScrollVisibleElement>
      </main>{/* <!-- End #main --> */}

      {/* ======= Footer ======= --> */}
      <ScrollVisibleElement>
        <FadeInWhenVisible delay={0.9}>
          <footer id="footer">
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

export default otros;