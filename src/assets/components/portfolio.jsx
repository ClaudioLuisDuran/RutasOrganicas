import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Card, CardBody, CardFooter, Stack, Heading, Button, Center, Text, Box, Fade } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topbar from '../fragments/topbar';
import logoRO from '../../assets/images/others/wwww.png';
import Footer from '../fragments/footer';
import NavBar from '../fragments/navbar';
import Vinos from '../images/descriptions/d_uvas.jpg';
import Yerbas from '../images/descriptions/d_yerba.jpg';
import Aceites from '../images/descriptions/d_aceites.jpg';
import Dulces from '../images/descriptions/d_dulce.jpg';
import Harinas from '../images/descriptions/d_harinas.jpg';
import SecosyEspecias from '../images/descriptions/d_condimentos.jpg';
import Cosmética from '../images/descriptions/d_cosmetica.jpg';
import icon1 from '../images/btns/btnLigthGreen_1.jpg';
import icon2 from '../images/btns/btnLigthGreen_2.jpg';
import icon3 from '../images/btns/btnLigthGreen_3.jpg';
import icon4 from '../images/btns/btnLigthGreen_4.jpg';
import icon5 from '../images/btns/btnLigthGreen_5.jpg';
import icon6 from '../images/btns/btnLigthGreen_6.jpg';
import icon7 from '../images/btns/btnLigthGreen_7.jpg';
import Img1 from '../images/blog/Mza1.webp';

/* Constantes para secciones */
const buttonDestinations = ["/wines", "/yerbas", "/aceites", "/dulces", "/harinas", "/fruconesp", "/cosmetica"];
const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];
const imgDestinations = [Vinos, Yerbas, Aceites, Dulces, Harinas, SecosyEspecias, Cosmética];
const descriptions = ["Vinos orgánicos", "Yerbas, infusiones", "Aceites, acetos, bebidas", "Dulces, conservas, miel", "Harinas, cereales, granos", "Frutos secos, condimentos, especias", "Cosmética"];
const descrptionAditionals = [
  "Elegirlos es un acto consciente, ético y respetuoso con nuestra salud y el medio ambiente.",
  "Aportan a nuestro organismo propiedades beneficiosas derivadas de sus compuestos naturales. Elegir ingredientes orgánicos nos garantiza la pureza y calidad de esos beneficios.",
  "Cada elección orgánica consciente nos deja un legado de pureza y equilibrio, y proporciona un valioso don de salud y conexión profunda con la tierra para las generaciones futuras.",
  "Dulces elaborados con las mejores frutas orgánicas con un proceso cuidado y delicado.",
  "Productos que se destacan por una mayor concentración de nutrientes esenciales, así como por su autenticidad y frescura de sabor.",
  "Producción de alimentos en base a productos orgánicos con alta eficiencia y ricos en fibras.",
  "Selección de productos para el cuidado de la piel y el cabello elaborados con ingredientes naturales, que garantizan una experiencia de belleza pura y segura para el usuario."
]

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

const portfolio = () => {

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
                <li>Portfolio</li>
              </ol>
              <h2>Portfolio</h2>
            </div>
          </section>{/* <!-- End Breadcrumbs --> */}
        </FadeInWhenVisible>
        {/*   <!-- ======= Blog Single Section ======= --> */}
        <section id="blog" className="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <article className="entry section-bg">
                  <FadeInWhenVisible delay={0.2}>
                    <div className="entry-img">
                      <img src={Img1} alt="" className="img-fluid" />
                    </div>
                    <h2 className="entry-title">
                      Nuestro portfolio de productos
                    </h2>
                  </FadeInWhenVisible>
                  {buttonDestinations.map((destination, index) => (
                    <FadeInWhenVisible delay={0.5}>
                      <Center>
                        <Card
                          key={index}
                          direction={{ base: index % 2 === 0 ? 'row' : 'row-reverse' }}
                          overflow='hidden'
                          variant='outline'
                          style={{ marginBottom: '20px' }}
                          borderWidth='1px' // Ancho del borde de la tarjeta
                          borderColor='black' // Color del borde de la tarjeta
                          boxShadow='0px 2px 4px rgba(0, 0, 0, 2)' // Sombra de la tarjeta
                          padding='1rem'
                          maxWidth='80%'
                        >
                          <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src={imgDestinations[index]}
                          />
                          <img
                            src={icons[index]}
                            style={{
                              position: 'absolute',
                              justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                              top: '10px',
                              right: index % 2 === 0 ? '10px' : 'unset',
                              left: index % 2 !== 0 ? '10px' : 'unset',
                              width: '50px',
                              height: '50px',
                              borderRadius: '50%',
                            }}
                          />
                          <Stack>
                            <CardBody>
                              <Heading size='lg'>{descriptions[index]}
                              </Heading>
                              <Text py='3' fontSize='lg'>
                                {descrptionAditionals[index]}
                              </Text>
                            </CardBody>
                            <CardFooter style={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                              <Link to={destination}>
                                <Button variant='solid' colorScheme='green'>
                                  Mas información
                                </Button>
                              </Link>
                            </CardFooter>
                          </Stack>
                        </Card>
                      </Center>
                    </FadeInWhenVisible>
                  ))}
                </article>{/* <!-- End blog entry --> */}
              </div>
            </div>
          </div>
        </section>
      </main>{/* <!-- End #main --> */}

      {/* ======= Footer ======= --> */}
      <footer id="footer">
        <Footer />
      </footer>
      {/* End Footer */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
        className="bi bi-arrow-up-short"></i></a>
    </>
  );
};

export default portfolio;