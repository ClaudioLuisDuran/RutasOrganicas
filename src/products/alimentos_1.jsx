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
import Elaborado1 from '../assets/images/portfolio/elaborado-1.jpg';
import Elaborado2 from '../assets/images/portfolio/elaborado-2.jpg';
import Elaborado3 from '../assets/images/portfolio/elaborado-3.jpg';
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

const alimentos_1 = () => {

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
              </p></a>
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
                <li>Alimentos elaborados orgánicos</li>
              </ol>
              <h2>Alimentos elaborados orgánicos</h2>
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
                            <img src={Elaborado1} alt="" />
                          </div>
                          <div>
                            <img src={Elaborado2} alt="" />
                          </div>
                          <div>
                            <img src={Elaborado3} alt="" />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-description">
                      <h2>Por una alimentación consciente.</h2>
                      <h4>Disfrute una amplia variedad de productos de almacén como harinas, mermeladas, legumbres, semillas, conservas, aceites, especias y extractos entre otros.
                      </h4>
                      <h5>Todo sin aditivos ni conservantes ni colorantes de sintesis quimicas. 100 % Natural. 100 % Orgánico y certificado.
                      </h5>
                      <h5>Una exclusiva selección en la cual se encuentran también bebidas de alta gama como fernets  y licores medicinales así como también jugos frutales.
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
            </section>
          </FadeInWhenVisible>
        </ScrollVisibleElement>
        {/* <!-- End Portfolio Details Section --> */}

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

export default alimentos_1;