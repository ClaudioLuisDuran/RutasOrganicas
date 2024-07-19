import React, { useEffect } from 'react';
import Typewriter from '../js/typewriter';
import { Box, Fade, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topbar from '../fragments/topbar';
import logoRO from '../../assets/images/others/wwww.png';
import Footer from '../fragments/footer';
import NavBar from '../fragments/navbar';
import Team1 from '../images/team/Ronny_1.jpg';
import Team2 from '../images/team/Gachi_1.jpg';
import Team3 from '../images/team/Luis_1.jpeg';
import Img1 from '../../assets/images/others/arboles-vinedo-crepusculo_2.jpg';
import Img2 from '../../assets/images/others/cordillera-puesta-sol.jpg';
import Img3 from '../../assets/images/others/beautiful-shot-road.jpg';

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

const nosotros = () => {

  useEffect(() => {
    // Scrollea la página hasta la parte superior
    window.scrollTo(0, 0);
  }, []);

  /* Textos de la página */
  const texNos1 = "Somos un equipo de profesionales conscientes del beneficio que aporta a nuestra salud una alimentación orgánica. Creamos éste medio de información para beneficiar a aquellos que al igual que nosotros están buscando evolucionar conscientemente a un camino de alimentación orgánica, saludable y sustentable.";
  const texNos2 = "Enriquecer la calidad de vida de las personas al compartir conocimientos sobre productos orgánicos certificados.";
  const texNos3 = "Hacer accesible la información sobre productos orgánicos certificados, facilitando el camino hacia una vida más saludable.";
  const texNos4_1 = "1. Compromiso con la información: Nos comprometemos a proporcionar información precisa y relevante sobre productos orgánicos certificados.";
  const texNos4_2 = "2. Transparencia y Honestidad:  Nos comprometemos a que nuestro accionar para recopilar información y comunicarla sea clara y honesta.";
  const texNos4_3 = "3. Empoderar al beneficiario: Creemos en ayudar a las personas para que tomen decisiones informadas y conscientes sobre su alimentación, salud y bienestar. Nos esforzamos por proporcionar herramientas y recursos que les permitan mejorar su calidad de vida.";
  const texNos5_1 = "1. Vamos al lugar";
  const texNos5_2 = "2. Vemos como se produce.";
  const texNos5_3 = "3. Nos informamos con los actores responsables.";
  const texNos5_4 = "4. Mostramos como sucede.";
  const texNos5_5 = "5. Beneficiamos a toda persona que quiera usar la información para mejorar su calidad de vida.";

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
      {/* <!-- ======= Top Bar ======= --> */}
      <div id="topbarContainer">
        <Topbar />
      </div>

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
                <li>Nosotros</li>
              </ol>
              <h2>Nosotros</h2>
            </div>
          </section>{/* <!-- End Breadcrumbs --> */}
        </FadeInWhenVisible>

        {/* Section about */}
        <section id="blog" className="blog" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <article className="entry entry-single">
                  <FadeInWhenVisible delay={0.2}>
                    <div className="entry-img">
                      <img src={Img1} alt="" className="img-fluid" />
                    </div>
                  </FadeInWhenVisible>
                  <div className="entry-content">
                    <FadeInWhenVisible delay={0.2}>
                      <h4 className="entry-title">
                        ¿Quiénes somos?
                      </h4>
                      <div>
                        <Typewriter text={texNos1} delay={10} />
                      </div>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.4}>
                      <h4 className="entry-title">
                        ¿Qué nos impulsa?
                      </h4>
                      <div>
                        <Typewriter text={texNos2} delay={4000} />
                      </div>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.6}>
                      <Center>
                        <img src={Img2} className="img-fluid" />
                      </Center>
                      <p></p>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.8}>
                      <h4 className="entry-title">
                        ¿Cuál es nuestro propósito?
                      </h4>
                      <div>
                        <Typewriter text={texNos3} delay={6000} />
                      </div>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={1}>
                      <h4 className="entry-title">
                        ¿Cuál es nuestro compromiso?
                      </h4>
                      <div>
                        <Typewriter text={texNos4_1} delay={8000} />
                        <Typewriter text={texNos4_2} delay={9000} />
                        <Typewriter text={texNos4_3} delay={10000} />
                      </div>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={1.2}>
                      <Center>
                        <img src={Img3} className="img-fluid" alt="" />
                      </Center>
                      <p></p>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={1.4}>
                      <h4 className="entry-title">
                        ¿Cómo lo hacemos?
                      </h4>
                      <div>
                        <Typewriter text={texNos5_1} delay={12000} />
                        <Typewriter text={texNos5_2} delay={13000} />
                        <Typewriter text={texNos5_3} delay={14000} />
                        <Typewriter text={texNos5_4} delay={15000} />
                        <Typewriter text={texNos5_5} delay={16000} />
                      </div>
                    </FadeInWhenVisible>
                  </div>
                </article>
              </div>
            </div>
            {/* Firma de autor // No usada  */}
            {/* <FadeInWhenVisible delay={2.1}>
                    <div className="entry-footer">
                      <i className="bi bi-folder"></i>
                      <ul className="cats">
                        <li><a href="#">Business</a></li>
                      </ul>

                      <i className="bi bi-tags"></i>
                      <ul className="tags">
                        <li><a href="#">Creative</a></li>
                        <li><a href="#">Tips</a></li>
                        <li><a href="#">Marketing</a></li>
                      </ul>
                    </div>
                  </FadeInWhenVisible> */}

            {/*     <FadeInWhenVisible delay={2.1}>
                  <div className="blog-author d-flex align-items-center">
                    <img src={Img4} className="rounded-circle float-left" alt="" />
                    <div>
                      <h4>Ronny Espindola</h4>
                      <div className="social-links">
                        <a href="https://twitters.com/#"><i className="bi bi-twitter"></i></a>
                        <a href="https://facebook.com/#"><i className="bi bi-facebook"></i></a>
                        <a href="https://instagram.com/#"><i className="biu bi-instagram"></i></a>
                      </div>
                      <p>
                        Ronny es el CEO de Rutas Orgánicas. Apasionado buscador de naturaleza y cofundador de R.O. con algunos de sus mejores amigos. Puedes seguirlo en sus redes sociales.
                      </p>
                    </div>
                  </div>
                  </FadeInWhenVisible>  */}{/* <!-- End blog author bio --> */}
            {/*  <!-- Fin --> */}
          </div>
        </section>

        {/*  <!-- ======= Team Section ======= --> */}
        <ScrollVisibleElement>
          <FadeInWhenVisible delay={0.5}>
            <section id="team" className="team section-bg">
              <div className="container">
                <div className="section-title">
                  <h2 >¿Quienes integran Rutas Orgánicas?</h2>
                  <p >Somo expertos en Marketing de negocios, pero también te ofrecemos guia en el desarrollo de tu modelo de negocios.</p>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
                    <div className="member">
                      <div className="member-img">
                        <img src={Team1} className="img-fluid" alt="" />
                        <div className="social">
                          <a href=""><i className="bi bi-twitter"></i></a>
                          <a href=""><i className="bi bi-facebook"></i></a>
                          <a href=""><i className="bi bi-instagram"></i></a>
                          <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>Ronny Gnass</h4>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
                    <div className="member">
                      <div className="member-img">
                        <img src={Team2} className="img-fluid" alt="" />
                        <div className="social">
                          <a href=""><i className="bi bi-twitter"></i></a>
                          <a href=""><i className="bi bi-facebook"></i></a>
                          <a href=""><i className="bi bi-instagram"></i></a>
                          <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>Graciela Pérez Puel</h4>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
                    <div className="member">
                      <div className="member-img">
                        <img src={Team3} className="img-fluid" alt="" />
                        <div className="social">
                          <a href=""><i className="bi bi-twitter"></i></a>
                          <a href=""><i className="bi bi-facebook"></i></a>
                          <a href=""><i className="bi bi-instagram"></i></a>
                          <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                      </div>
                      <div className="member-info">
                        <h4>Luis Astray</h4>
                        <span>Socio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* <!-- End Team Section --> */}
          </FadeInWhenVisible>
        </ScrollVisibleElement>

      </main>{/* <!-- End #main --> */}

      {/* ======= Footer ======= --> */}
      <ScrollVisibleElement>
        <FadeInWhenVisible delay={0.5}>
          <footer id="footer">
            <Footer />
          </footer>
          {/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
            className="bi bi-arrow-up-short"></i></a>
        </FadeInWhenVisible>
      </ScrollVisibleElement>
    </>
  );
};

export default nosotros;