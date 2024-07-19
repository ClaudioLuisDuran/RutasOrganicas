import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Tooltip } from '@chakra-ui/react';
import { keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import vinoBtn from '../images/btns/btnLigthGreen_1.jpg';
import yerbaBtn from '../images/btns/btnLigthGreen_2.jpg';
import aceiteBtn from '../images/btns/btnLigthGreen_3.jpg';
import dulceBtn from '../images/btns/btnLigthGreen_4.jpg';
import harinasBtn from '../images/btns/btnLigthGreen_5.jpg';
import frutcondespBtn from '../images/btns/btnLigthGreen_6.jpg';
import cosmeticaBtn from '../images/btns/btnLigthGreen_7.jpg';

const buttonImages = [vinoBtn, yerbaBtn, aceiteBtn, dulceBtn, harinasBtn, frutcondespBtn, cosmeticaBtn];
const buttonDestinations = ["/wines", "/yerbas", "/aceites", "/dulces", "/harinas", "/fruconesp", "/cosmetica"];
const buttonDescriptions = ['Vinos orgánicos', 'Yerbas, infusiones', 'Aceites, acetos, bebidas', 'Dulces, conservas, miel', 'Harinas, cereales, granos', 'Frutos secos, condimentos, especias', 'Cosmética'];
const calculateAnimationDelay = (index) => `${index * 0.5}s`; // Desfase de 0.5 segundos entre cada botón

const buttonAnimation = keyframes`
0% {
  opacity: 0;
  transform: translateX(350%) translateY(-450%) rotate(-90deg);
}
50% {
  opacity: 1;
}
100% {
  opacity: 1;
  transform: translateX(0%) translateY(0%);
}
`;

const Botonera = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [tooltipIndex, setTooltipIndex] = useState(-1);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateSize = () => {
    const maxButtonSize = 100; // Tamaño máximo del botón en píxeles
    const minWidth = windowWidth / buttonImages.length * 0.7; // 70% del ancho disponible dividido por el número de botones
    const buttonSize = Math.min(maxButtonSize, minWidth);
    return { width: `${buttonSize}px`, height: `${buttonSize}px` };
  };

  const calculatePosition = (index) => {
    const totalButtons = buttonImages.length;
    const buttonSize = calculateSize().width.replace('px', '');
    const containerWidth = windowWidth * 0.7; // 70% del ancho de la ventana
    const containerHeight = window.innerHeight;
    const buttonWidth = containerWidth / totalButtons; // Ancho de cada botón
    const totalButtonsWidth = buttonWidth * totalButtons; // Ancho total de los botones
    const x = (containerWidth - totalButtonsWidth) / 2 + buttonWidth * (index - (totalButtons) / 2); // Coordenada X del botón, centrada en la pantalla
    const y = containerHeight * 0.8; // Coordenada Y del botón (20% por encima del borde inferior)
    return { left: `${x}px`, top: `${y}px` };
  };

  const handleMouseEnter = (index) => {
    setTooltipIndex(index);
  };

  const handleMouseLeave = () => {
    setTooltipIndex(-1);
  };

  const handleMouseMove = (event) => {
    event.stopPropagation();
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      {buttonImages.map((image, index) => {
        const animationProps = prefersReducedMotion
          ? { animation: 'none' }
          : {
            animation: `${buttonAnimation} 2.5s ${calculateAnimationDelay(index)} forwards`,
          };
        return (
          <Link to={buttonDestinations[index]} key={index}>
            <Box
              className="bubble-button"
              as="button"
              borderRadius="50%"
              overflow="hidden"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.1)' }}
              {...calculateSize()}
              position="absolute"
              {...calculatePosition(index)}
              opacity={0}
              {...animationProps}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <Tooltip label={buttonDescriptions[index]} isOpen={tooltipIndex === index} hasArrow={true} placement="top" background="rgba(0, 100, 0, 0.8)" style={{ position: 'fixed', top: tooltipPosition.y, left: tooltipPosition.x }}>
                <Image src={image} alt={buttonDescriptions[index]} objectFit="cover" width="100%" height="100%" />
              </Tooltip>
            </Box>
          </Link>
        );
      })}
    </>
  );
};

export default Botonera;