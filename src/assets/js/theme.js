 import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'teal.50',  // Color de fondo verde agua
      },
    },
  },
});

export default theme; 

/* import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'teal.50',
      },
      // Excluir elementos con la clase .animatedElement
      '.fadenew': {
        bg: 'unset', // Restablecer el fondo al valor predeterminado
      },
    },
  },
});

export default theme; */