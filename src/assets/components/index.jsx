import React, { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Video1920 from '../video/video_1920.mp4';
import logo from '../images/others/wwww.png';
import Botonera from './navIndex';
import Social from '../fragments/social';
import NavBar from '../fragments/navbar';

const IndexPage = () => {

  useEffect(() => {
    // Scrollea la página hasta la parte superior
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/"><img src={logo} alt="Rutas Orgánicas" className="img-fluid" />
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

      <Social />

      <section style={{ position: 'relative' }}>
        {/* Video */}
        <Flex
          alignItems="center"
          justifyContent="center"
          /* minHeight="100vh" */
          style={{ width: '100%', height: '100%' }}
          position="relative" // Importante para posicionar el contenido absoluto dentro
        >
          <video className="video-container" autoPlay={true} muted={true} loop={true} style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}>
            <source src={Video1920} type="video/mp4"></source>
          </video>
          <Box position="absolute" zIndex={2}>
            <Botonera />
          </Box>
        </Flex>
      </section>
    </>
  );
};

export default IndexPage;