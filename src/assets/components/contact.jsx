import React, { useRef, useEffect, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Box, Fade } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topbar from '../fragments/topbar';
import logoRO from '../../assets/images/others/wwww.png';
import Footer from '../fragments/footer';
import NavBar from '../fragments/navbar';
import Img3 from '../../assets/images/others/vinedo-amanecer.jpg';

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

const contact = () => {

  useEffect(() => {
    // Scrollea la página hasta la parte superior
    window.scrollTo(0, 0);
  }, []);

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

  /* Textos de faqs */
  const faqs = [
    {
      question: "¿Cuáles son las ventajas de unirme a su web como productor orgánico?",
      answer: "Al unirte a nuestra organización, tendrás acceso a una amplia audiencia de consumidores interesados en productos orgánicos, lo que te ayudará a aumentar tus ventas y visibilidad en el mercado.."
    },
    {
      question: "¿Cómo me beneficiaré de la plataforma para productores orgánicos en términos de visibilidad?",
      answer: "Nuestra web te proporcionará una plataforma en línea donde podrás mostrar tus productos, describir tu historia y destacar tus prácticas sostenibles. Esto te permitirá llegar a un público más amplio y diferenciarte de la competencia."
    },

    {
      question: "¿Puedo ampliar mi red de contactos a través de vuestra web?",
      answer: "Sí, al unirte a nuestra plataforma podrás conectarte con otros productores orgánicos, distribuidores y consumidores comprometidos con la agricultura sostenible. Esto te permitirá establecer colaboraciones y oportunidades de negocio."
    },
    {
      question: "¿Cómo puedo empezar a utilizar vuestros servicios?",
      answer: "Es muy sencillo. Solo tienes que ponerte en contacto con el formulario que encuentras aquí mismo, mas abajo. Luego, según el perfil de tu negocio, te pediremos la información relevante a publicar. Así, estarás listo para comenzar a aprovechar todas las ventajas que ofrecemos."
    }
  ];

  const [openedFAQ, setOpenedFAQ] = useState(null);
  const toggleFAQ = (index) => {
    if (openedFAQ === index) {
      setOpenedFAQ(null);
    } else {
      setOpenedFAQ(index);
    }
  };

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [provincia, setProvincia] = useState('');
  const [pais, setPais] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Sending email with the following data:');
    console.log('Name:', nombre);
    console.log('Email:', email);
    console.log('Telefono:', telefono);
    console.log('Empresa:', empresa);
    console.log('Provincia:', provincia);
    console.log('Pais:', pais);
    console.log('Mensaje:', mensaje);

    // Validar campos obligatorios
    if (!nombre || !email || !provincia || !pais || !mensaje) {
      setErrorMessage('Por favor, rellena todos los campos obligatorios.');
      return;
    }

    // Validar email
    if (!validateEmail(email)) {
      setErrorMessage('Por favor, introduce un email válido.');
      return;
    }

    // Construir el HTML del email
    const emailBody = `
  <h2>Nuevo formulario de contacto</h2>
  <p><strong>Nombre:</strong> ${nombre}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Teléfono:</strong> ${telefono}</p>
  <p><strong>Empresa:</strong> ${empresa}</p>
  <p><strong>Provincia:</strong> ${provincia}</p>
  <p><strong>País:</strong> ${pais}</p>
  <p><strong>Mensaje:</strong> ${mensaje}</p>
`;
    const templateParams = {
      message_html: emailBody,
      from_name: nombre,
      reply_to: email,
    };

    console.log('templateParams:', templateParams);
    const serviceID = 'service_37r610n';
    const templateID = 'template_trpt2x6';
    const publicKey = 'mJ3qfwDcOIR_vpidx';

    emailjs.sendForm(
      serviceID,
      templateID,
      /* templateParams, */
      form.current,
      publicKey,
    )
      .then((result) => {
        console.log('Email enviado con éxito!', result.text);
        // Puedes agregar aquí la lógica para limpiar los campos del formulario
      },
        (error) => /* {
        console.log('Error al enviar el email:', error.text);
      }, */ {
          if (error instanceof EmailJSResponseStatus) {
            console.log('EMAILJS FAILED...', error);
            return;
          }

          console.log('ERROR', error);
        }
      );
  };

  const validateEmail = (email) => {
    // Validación básica de email
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const validatePhone = (phone) => {
    // Validación del teléfono (solo números sin guiones, puntos ni espacios)
    return /^\d+$/.test(phone);
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
                <li>Contacto</li>
              </ol>
              <h2>Contacto</h2>
            </div>
          </section>{/* <!-- End Breadcrumbs --> */}
        </FadeInWhenVisible>

        {/*   <!-- ======= Blog Single Section ======= --> */}
        <ScrollVisibleElement>
          <FadeInWhenVisible delay={0.5}>
            <section id="blog" className="blog">
              <div className="container row">
                <div className="col-lg-12">
                  <article className="entry entry-single ">
                    <div className="entry-img d-flex align-items-center justify-content-center w-100">
                      <img src={Img3} alt="" className="img-fluid" />
                    </div>

                    {/* Formulario de contacto */}
                    <div
                      className="mb-5 mx-auto shadow-lg p-3 bg-body rounded"
                      style={{
                        maxWidth: '80%',
                        '@media (max-width: 767px)': {
                          maxWidth: '90%',
                        },
                      }}
                    >
                      <h5>Use el formulario para contarnos sus inquietudes y nos pondremos en contacto con usted muy pronto.</h5>
                      {errorMessage && <div className="error text-danger">{errorMessage}</div>}
                      <div
                        style={{
                          borderWidth: '1px',
                          borderColor: 'black',
                          borderRadius: '20px',
                          padding: '10px',
                          boxShadow: '0px 2px 4px rgba(0, 0, 0, 2)',
                          maxWidth: '80%',
                          height: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto',
                          backgroundColor: '#a3c3a9',
                        }}>
                        <form ref={form} onSubmit={handleSubmit} style={{ width: '80%' }}>
                          <div className="mb-3">
                            {/* <label >Nombre completo:*</label> */}
                            <input
                              type="text"
                              value={nombre}
                              id="nombre"
                              name="nombre"
                              placeholder="Nombre completo"
                              onChange={(e) => setNombre(e.target.value)}
                              required
                              style={{ width: '100%', padding: '10px' }}
                            />
                          </div>
                          <div className="mb-3">
                            {/* <label >Email:*</label> */}
                            <input
                              type="email"
                              value={email}
                              id="email"
                              name="email"
                              placeholder="Email"
                              autocomplete="email"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              style={{ width: '100%', padding: '10px' }}
                            />
                          </div>
                          <div className="mb-3">
                            {/* <label >Teléfono de contacto:*</label> */}
                            <input
                              type="tel"
                              value={telefono}
                              id="telefono" name="telefono" placeholder="Teléfono de contacto"
                              onChange={(e) => setTelefono(e.target.value)}
                              required
                              style={{ width: '100%', padding: '10px' }}
                            />
                          </div>
                          <div className="mb-3">
                            {/* <label >Empresa:</label> */}
                            <input
                              type="text"
                              value={empresa}
                              id="empresa"
                              name="empresa"
                              placeholder="Empresa (si corresponde)"
                              onChange={(e) => setEmpresa(e.target.value)}
                              style={{ width: '100%', padding: '10px' }}
                            />
                          </div>
                          <div className="mb-3">
                            {/* <label >Provincia:*</label> */}
                            <input
                              type="text"
                              value={provincia}
                              id="provincia"
                              name="provincia"
                              placeholder="Provincia"
                              onChange={(e) => setProvincia(e.target.value)}
                              required
                              style={{ width: '100%', padding: '10px' }}
                            />
                          </div>
                          <div className="mb-3">
                            {/* <label >País:*</label> */}
                            <input
                              type="text"
                              value={pais}
                              id="pais"
                              name="pais"
                              placeholder="Pais"
                              onChange={(e) => setPais(e.target.value)}
                              required
                              style={{ width: '100%', padding: '10px' }}
                            />
                          </div>
                          <div className="mb-3">
                            {/* <label >Mensaje:*</label> */}
                            <textarea
                              rows="5"
                              value={mensaje}
                              id="mensaje"
                              name="mensaje"
                              placeholder="Su mensaje o consulta"
                              onChange={(e) => setMensaje(e.target.value)}
                              required
                              style={{ width: '100%', padding: '10px' }}
                            ></textarea>
                          </div>
                          <button type="submit" value="Send" className="btn btn-primary">
                            Enviar
                          </button>
                        </form>
                      </div>
                    </div>
                    {/* Fin formulario */}

                  </article>{/* <!-- End blog entry --> */}
                </div>
              </div>
            </section>
          </FadeInWhenVisible>
        </ScrollVisibleElement>

        {/*  <!-- ======= FAQ Section ======= --> */}
        <ScrollVisibleElement>
          <FadeInWhenVisible delay={0.5}>
            <section id="faq" className="faq section-bg justify-content-start">
              <div className="container justify-content-start">
                <div className="section-title justify-content-start">
                  <h4 >Información importante para productores</h4>
                  <p >Aquí tiene algunas de las consultas o dudas más frecuentes que recibimos.</p>
                  <p> Lo invitamos a leerlas antes de ponerse en contacto para requerir nuestras servicios. Si tienes otras dudas o quieres establecer vínculos con nosotros,lo invitamos a contactarnos.</p>
                </div>
                <div className="faq-list justify-content-start">
                  <ul>
                    {faqs.map((faq, index) => (
                      <li key={index}>
                        <div
                          className={`question ${openedFAQ === index ? 'question--active' : ''}`}
                          onClick={() => toggleFAQ(index)}
                        >
                          <span className="question__text">{faq.question}</span>
                          <span className={`arrow ${openedFAQ === index ? 'arrow--up' : 'arrow--down'}`}>
                            {openedFAQ === index ? '▲' : '▼'}
                          </span>
                        </div>
                        <div
                          className={`textscript answer ${openedFAQ === index ? 'answer--show' : ''} h4faq`}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </FadeInWhenVisible>
        </ScrollVisibleElement>
      </main>{/* <!-- End #main --> */}

      {/* ======= Footer ======= --> */}
      <ScrollVisibleElement>
        <FadeInWhenVisible delay={0.9}>
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

export default contact;
