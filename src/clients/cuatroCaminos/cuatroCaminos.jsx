import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Card, Center, Box, Fade, StackDivider, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Topbar from '../../assets/fragments/topbar';
import logoRO from '../../assets/images/others/wwww.png';
import Footer from '../../assets/fragments/footer';
import NavBar from '../../assets/fragments/navbar';
import Logo from './logo_cuatroCaminos.png';
import domain1 from './cuatro_1.webp';
import domain2 from './cuatro_7.jpg';
import domain3 from './cuatro_10.jpg';
import domain4 from './cuatro_2.webp';

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

function getVideoIdFromUrl(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}

const cuatroCaminos = () => {

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

  const [videos, setVideos] = useState([]);
  const cantVideos = 5; /* Cambiar valor según cantidad */

  useEffect(() => {
    const mockVideos = [
      { id: 'video1', title: 'Video 1', url: 'https://youtu.be/watch?v=eEeHOH2kPYA' },
      { id: 'video2', title: 'Video 2', url: 'https://youtu.be/watch?v=qi4Kc6tUpWI' }, 
      { id: 'video3', title: 'Video 3', url: 'https://youtu.be/watch?v=dqW_3akwgIM' }, 
 /*      { id: 'video4', title: 'Video 4', url: 'https://youtu.bem/watch?v=KGMhhSQf2DM' },
      { id: 'video5', title: 'Video 5', url: 'https://youtu.be/watch?v=pLyqocr5-I8' }, */
    ];

    setVideos(mockVideos);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
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
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/yerbas">Yerbas Mate orgánica</a></li>
                <li>Clientes</li>
              </ol>
              <h2>Cuatro Caminos S.R.L.</h2>
            </div>
          </section>{/* <!-- End Breadcrumbs --> */}
        </FadeInWhenVisible>

        {/* Sección Cliente */}
        <section id="blog" className="blog">
          <div className="container">
            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
              <div style={{ marginRight: '20px' }}>
                <img
                  src={Logo}
                  className="logoClientVideo"
                  style={{
                    borderWidth: '1px',
                    borderColor: 'black',
                    borderRadius: '20px',
                    padding: '10px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 2)',
                    maxWidth: '200px',
                    height: 'auto',
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', flex: '1' }}>
                {videos.slice(0,cantVideos).map((video) => (
                  <div
                    key={video.id}
                    style={{
                      marginBottom: '20px',
                      marginRight: '20px',
                      flex: '0 0 30%',
                      /* cursor: 'pointer', */
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                        cursor: 'pointer',
                      }}
                      onClick={() => handleVideoSelect(video.url)}
                    />
                    <YouTube
                      videoId={video.url.split('v=')[1]}
                      opts={{
                        height: '100',
                        width: '100%',
                        playerVars: {
                          autoplay: 0,
                          controls: 0,
                          showinfo: 0, // Ocultar controles del reproductor
                        },
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Modal para video */}
            {isModalOpen && (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1000,
                }}
                onClick={handleCloseModal}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '5px',
                    width: '80%',
                    height: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onClick={(event) => event.stopPropagation()} // Evitar propagación del evento
                >
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                    <button onClick={handleCloseModal} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                  {selectedVideo && (
                    <div style={{ height: '100vh', position: 'relative' }}>
                      <YouTube
                        /* videoId={selectedVideo.split('v=')[1]} */
                        videoId={getVideoIdFromUrl(selectedVideo)}
                        className='videoModal'
                        opts={{
                          host: 'https://www.youtube-nocookie.com',
                          width: '100%',
                          height: '100%',
                          playerVars: {
                            autoplay: 1,
                            rel: 0,
                          },
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Info cliente */}
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
                      <h4>CUATRO CAMINOS: COMPROMETIDOS CON LA TIERRA Y LA TRADICIÓN</h4>
                      <p style={{ fontSize: '18px' }}>
                        <i>Cuatro Caminos es, desde sus origenes, una Empresa familiar dedicada al cultivo y elaboración de yerba mate, que inicia en la década del 60 cuando Gustav A. Björklund, hijo de emigrantes suecos a Brasil, emprende su propio viaje hacia Misiones, donde encuentra su pasión por el oro verde. Tanto que, además de chacras, compra un secadero de tubos rotatorios para la elaboración de yerba mate canchada, nombrándolo “El tubo cué”. Después de unos años, pide a su hijo, "Klos" R. Bjorklund, que asuma el manejo del secadero, y aunque en ese momento tenía otros planes, con el apoyo de su esposa Mirta E. Geisseler, logra comprar la parte heredada por sus hermanos y construir su propio secadero tipo barbacuá.</i>
                      </p>
                      <p style={{ fontSize: '18px' }}>
                      En 1988, Klas Rubén Bjorklund padre e hijo, forman una sociedad, con la que adquieren, en 1993, la razón social Cuatro Caminos S.R.L, junto con la marca Cuatro Caminos, el molino y la envasadora, para comenzar a elaborar su propia marca de yerba mate elaborada y realizar servicio de elaboración para otras marcas. En 2.004 apuestan a la producción orgánica, certificando, a través de OIA, las normativas orgánicas bajo los Programas OIA (AR-UE) y OIA (NOP), desde sus yerbales hasta su propio establecimiento elaborador, para brindar un producto 100% orgánico y cuidado desde su origen. 
                      </p>
                      <p>
                      Con el deseo de continuar creciendo y cumpliendo con las necesidades de sus clientes, en 2008 construyen un secadero de cinta con intercambiador de calor, para calentar de forma indirecta el aire que ingresa al secadero y evitar que la yerba mate entre en contacto con los productos de combustión. Posteriormente continúan las modificaciones para reemplazar el uso de leña por chip (descarte de aserraderos) en todas las etapas de secado de la hoja verde. De esta manera se comprometen en el cuidado del bosque nativo.
                      </p>
                      <p>
                      Esa es su historia y la herencia de sus ancestros, inmigrantes que les transmitieron la pasión por la yerba mate y la valiosa enseñanza de enfrentar los cambios con el corazón dispuesto.
                      </p>
                      <div className="fotoClient-container">
                        <img src={domain1} className="fotoClient" />
                        <img src={domain2} className="fotoClient" />
                        <img src={domain3} className="fotoClient" />
                        <img src={domain4} className="fotoClient" />
                      </div>
                      <div className="button-clientContainer">
                        {/*  <a href="https://domainebousquet.com/" target="_blank" rel="noopener noreferrer"><Button colorScheme='teal' variant='outline'>
                            Visitar Bodega Domain Bousquet
                          </Button></a> */}
                        <Link to="/yerbas">
                          <Button colorScheme='teal' variant='outline'>
                            Volver a Yerbas Mate Orgánicas
                          </Button>
                        </Link>
                        <Link to="/portfolio">
                          <Button colorScheme='teal' variant='outline'>
                            Ver todo el Portfolio de productos
                          </Button>
                        </Link>
                      </div>
                    </VStack>
                  </Card>
                </Center>
              </FadeInWhenVisible>
            </div>
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

export default cuatroCaminos;