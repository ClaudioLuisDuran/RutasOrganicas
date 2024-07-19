import React, { useEffect } from 'react';
import { Card, Center, Box, Fade, StackDivider, VStack } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topbar from '../fragments/topbar';
import logoRO from '../../assets/images/others/wwww.png';
import Footer from '../fragments/footer';
import NavBar from '../fragments/navbar';
import Icon1 from '../../assets/images/btns/IconV_1.jpg';
import Icon2 from '../../assets/images/btns/IconV_2.jpg';
import Icon3 from '../../assets/images/btns/IconV_3.jpg';
import Icon4 from '../../assets/images/btns/IconV_4.jpg';
import Icon5 from '../../assets/images/btns/IconV_5.jpg';
import Icon6 from '../../assets/images/btns/IconV_6.jpg';
import Logo1 from '../images/logos/Organico_argentina.png';
import Logo2 from '../images/logos/european-union.webp';
import Logo3 from '../images/logos/canada-organic-logo.jpg';
import Logo4 from '../images/logos/USDA.png';
import Logo5 from '../images/logos/arg_argencert.png';
import Logo6 from '../images/logos/arg_fs.webp';
import Logo7 from '../images/logos/arg_letis.jpeg';
import Logo8 from '../images/logos/arg_oia.jpg';

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

const definiciones = () => {

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
        <FadeInWhenVisible>
          <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
              <ol>
                <li><a href="/">Home</a></li>
                <li>Definiciones</li>
              </ol>
              <h2>Definiciones importantes</h2>
            </div>
          </section>{/* <!-- End Breadcrumbs --> */}
        </FadeInWhenVisible>

        {/* Sección Definiciones */}
        <section id="blog" className="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <FadeInWhenVisible delay={0.5}>
                  <Center>
                    <Card
                      /*  key={index} */
                      /* direction={{ base: index % 2 === 0 ? 'row' : 'row-reverse' }} */
                      direction={{ base: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      style={{ marginBottom: '20px' }}
                      borderWidth='1px' // Ancho del borde de la tarjeta
                      borderColor='black' // Color del borde de la tarjeta
                      boxShadow='0px 2px 4px rgba(0, 0, 0, 2)' // Sombra de la tarjeta
                      padding='1rem'
                      maxWidth='100%'
                    >
                      <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                      >
                        <h4>¿Qué son los alimentos orgánicos?</h4>

                        <p style={{ fontSize: '18px' }}>Según la <a href="https://www.fao.org/home/es" target="_blank" rel="noopener noreferrer"><u>Organización de las Naciones Unidas para la Alimentación y la Agricultura</u></a> (<b>FAO</b>),
                          <i>"Los alimentos orgánicos son aquellos que se producen mediante métodos que no
                            implican el uso de pesticidas sintéticos, fertilizantes químicos, organismos
                            genéticamente modificados (OGM), ni la irradiación. La agricultura orgánica promueve el
                            uso de recursos renovables y la conservación del suelo y el agua para mejorar la calidad
                            ambiental en el futuro."</i>
                        </p>
                      </VStack>
                    </Card>
                  </Center>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={1.0}>
                  <Center>
                    <Card
                      direction={{ base: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      style={{ marginBottom: '20px' }}
                      borderWidth='1px' // Ancho del borde de la tarjeta
                      borderColor='black' // Color del borde de la tarjeta
                      boxShadow='0px 2px 4px rgba(0, 0, 0, 2)' // Sombra de la tarjeta
                      padding='1rem'
                      maxWidth='100%'
                    >
                      <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                      >
                        <h4>¿Qué ley rige en Argentina a los alimentos orgánicos?</h4>

                        <p style={{ fontSize: '18px' }}>La Producción Orgánica en Argentina está amparada por la <a href="https://www.argentina.gob.ar/normativa/nacional/ley-25127-59885" target="_blank" rel="noopener noreferrer"><u>Ley 25.127</u></a>.
                          Se trata de un sistema de producción sostenible que promueve el cuidado ambiental.

                          Se basa en el uso mínimo de insumos externos, sin uso de fertilizantes y plaguicidas
                          sintéticos, ni manipulación genética. Se utilizan métodos que minimizan la contaminación
                          del aire, suelo y agua.</p>

                        <p style={{ fontSize: '18px' }}>Los productores, manipuladores, procesadores y comerciantes de alimentos orgánicos se
                          rigen por normas que mantienen su integridad. Siempre deben estar certificados por una entidad habilitada por SENASA
                          En Argentina Orgánico es equivalente a ecológico y biológico, incluyendo sus apócopes
                          eco y bio.
                        </p>
                      </VStack>
                    </Card>
                  </Center>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={1.5}>
                  <Center>
                    <Card
                      className="full-width-card"
                      direction={{ base: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      style={{ marginBottom: '20px' }}
                      borderWidth='1px' // Ancho del borde de la tarjeta
                      borderColor='black' // Color del borde de la tarjeta
                      boxShadow='0px 2px 4px rgba(0, 0, 0, 2)' // Sombra de la tarjeta
                      padding='1rem'
                      maxWidth='100%'
                    >
                      <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='center'
                        justify='center'
                        width='100%'
                      >
                        <div>
                          <h4>Certificaciones de Argentina e Internacionales</h4>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                          <div>
                            <a href="https://www.argentina.gob.ar/senasa/programassanitarios/produccion-organica" target="_blank" rel="noopener noreferrer">
                              <Center>
                                <img src={Logo1} alt='Logo 1' style={{ maxWidth: '150px', maxHeight: '150px' }} />
                              </Center>
                              <Center>
                                <p style={{ fontSize: '14px' }}>Argentina</p>
                              </Center>
                            </a>
                          </div>
                          <div>
                            <a href="https://agriculture.ec.europa.eu/farming/organic-farming/organic-logo_es" target="_blank" rel="noopener noreferrer">
                              <Center>
                                <img src={Logo2} alt='Logo 2' style={{ maxWidth: '150px', maxHeight: '150px' }} />
                              </Center>
                              <Center>
                                <p style={{ fontSize: '14px' }}>Europa</p>
                              </Center>
                            </a>
                          </div>
                          <div>
                            <a href="https://ioas.org/services/organic-agriculture/canada-organic-regime/" target="_blank" rel="noopener noreferrer">
                              <Center>
                                <img src={Logo3} alt='Logo 3' style={{ maxWidth: '150px', maxHeight: '150px' }} />
                              </Center>
                              <Center>
                                <p style={{ fontSize: '14px' }}>Canadá</p>
                              </Center>
                            </a>
                          </div>
                          <div>
                            <a href="https://www.qai-inc.com/es/certificacion-de-organicos/usda-organicos.php" target="_blank" rel="noopener noreferrer">
                              <Center>
                                <img src={Logo4} alt='Logo 4' style={{ maxWidth: '150px', maxHeight: '150px' }} />
                              </Center>
                              <Center>
                                <p style={{ fontSize: '14px' }}>USA</p>
                              </Center>
                            </a>
                          </div>
                        </div>
                      </VStack>
                    </Card>
                  </Center>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={2}>
                  <Center>

                    <Card
                      className="full-width-card"
                      direction={{ base: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      style={{ marginBottom: '20px' }}
                      borderWidth='1px' // Ancho del borde de la tarjeta
                      borderColor='black' // Color del borde de la tarjeta
                      boxShadow='0px 2px 4px rgba(0, 0, 0, 2)' // Sombra de la tarjeta
                      padding='1rem'
                      maxWidth='100%'
                    >
                      <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='center'
                        justify='center'
                        width='100%'
                      >
                        <div>
                          <h4>Empresas Certificadoras Argentinas</h4>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                          <div>
                            <a href="https://www.ecocert.com/es-AR/home" target="_blank" rel="noopener noreferrer">
                              <Center>
                                <img src={Logo5} alt='Argencert' style={{ maxWidth: '100%', maxHeight: '150px' }} />
                              </Center>
                              <Center>
                                <p style={{ fontSize: '14px' }}>Argencert</p>
                              </Center>
                            </a>
                          </div>
                          <div>
                            <a href="https://www.foodsafety.com.ar/" target="_blank" rel="noopener noreferrer">
                              <Center>
                                <img src={Logo6} alt='FS Argentina' style={{ maxWidth: '150px', maxHeight: '150px' }} />
                              </Center>
                              <Center>
                                <p style={{ fontSize: '14px' }}>FS</p>
                              </Center>
                            </a>
                          </div>
                          <div>
                            <a href="https://letis.org/" target="_blank" rel="noopener noreferrer">
                              <Center>
                                <img src={Logo7} alt='Letis Argentina' style={{ maxWidth: '150px', maxHeight: '150px' }} />
                              </Center>
                              <Center>
                                <p style={{ fontSize: '14px' }}>Letis</p>
                              </Center>
                            </a>
                          </div>
                          <div>
                            <a href="https://www.oia.com.ar/" target="_blank" rel="noopener noreferrer">
                              <Center>
                                <img src={Logo8} alt='OIA Argentina' style={{ maxWidth: '150px', maxHeight: '150px' }} />
                              </Center>
                              <Center>
                                <p style={{ fontSize: '14px' }}>OIA</p>
                              </Center>
                            </a>
                          </div>
                        </div>
                      </VStack>
                    </Card>
                  </Center>
                </FadeInWhenVisible>
              </div>
            </div>

            {/*  <!-- ======= Ventajas Section ======= --> */}
            <ScrollVisibleElement>
              <FadeInWhenVisible delay={2.3}>
                <section id="services" className="services section-bg">
                  {/* <div className="entry-img">
                    <img src={VentajasImg} alt="" className="img-fluid" />
                  </div> */}
                  <div className="container">
                    <div className="section-title" >
                      <h4>Ventajas de una producción saludable</h4>
                      <p>Promover el consumo de productos orgánicos es una forma de apoyar a los agricultores que utilizan métodos sostenibles y respetuosos con el medio ambiente. Al hacerlo, contribuimos a la creación de sistemas agrícolas más equitativos y a la conservación de la agricultura tradicional.</p>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6" >
                        <div className="icon-box">
                          <div className="icon bubble-icon"><img src={Icon1} /></div>
                          <h4 className="title"><a href="">Son más saludables</a></h4>
                          <p className="description">Al respetarse su desarrollo natural y/o elaboración artesanal, los alimentos son más nutritivos.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon-box">
                          <div className="icon bubble-icon"><img src={Icon2} /></div>
                          <h4 className="title"><a href="">Son más ricos</a></h4>
                          <p className="description">Al usar solamente procesos naturales, los alimentos obtenidos tienen mejor sabor, olor y aroma.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6" >
                        <div className="icon-box">
                          <div className="icon bubble-icon"><img src={Icon3} /></div>
                          <h4 className="title"><a href="">Comercio saludable</a></h4>
                          <p className="description">Centenares de familias y pequeños productores pueden potenciar sus negocios a través de nuestra plataforma.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6" >
                        <div className="icon-box">
                          <div className="icon bubble-icon"><img src={Icon4} /></div>
                          <h4 className="title"><a href="">Agua más pura</a></h4>
                          <p className="description">El uso de sistemas de riego controlado y por goteo, cuida el medioambiente, cuida el valor del agua y no sufre pérdidas como los sistemas de riego a manto.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6" >
                        <div className="icon-box">
                          <div className="icon bubble-icon"><img src={Icon5} /></div>
                          <h4 className="title"><a href="">Más energía</a></h4>
                          <p className="description">Está científicamente comprobado que los alimentos orgánicos tienen efectos mas certeros y duraderos en el ser humano.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6" >
                        <div className="icon-box">
                          <div className="icon bubble-icon"><img src={Icon6} /></div>
                          <h4 className="title"><a href="">Más diversidad alimenticia</a></h4>
                          <p className="description">Lejos de ser un mercado acotado, existen en Argentina más de 10.000 productores de alimentos orgánicos, producidos y/o elaborados, con standares muy exigentes.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>{/* <!-- End Services Section --> */}
              </FadeInWhenVisible>
            </ScrollVisibleElement>
          </div>
        </section>
      </main > {/* <!-- End #main --> */}

      {/* ======= Footer ======= --> */}
      <ScrollVisibleElement>
        <FadeInWhenVisible delay={0.7}>
          <footer id="footer">
            <Footer />
          </footer>
          {/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short"></i>
          </a>
        </FadeInWhenVisible>
      </ScrollVisibleElement>
    </>
  );
};

export default definiciones;