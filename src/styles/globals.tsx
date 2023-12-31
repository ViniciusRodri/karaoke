import { extendTheme } from '@chakra-ui/react';
import { createGlobalStyle } from 'styled-components';

export const theme = extendTheme({
  colors: {
    white: {
      500: '#F6EFEE',
    },
    gold: {
      500: '#FFD700',
    },
    black: {
      500: '#28262C',
    },
    orange: {
      500: '#DB7C26',
    },
  },
  fonts: {
    heading: `'New Year', sans-serif`,
    body: `'New Year', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#FFF',
        color: '#000',
        fontSize: '1em',
      },
      a: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});

export const GlobalStyles = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;     
    height: 10px;
    scrollbar-width: thin;         
  }      

  ::-webkit-scrollbar-track {
    background: #F1F1F1;       
  }

  ::-webkit-scrollbar-thumb {
    background-color: #929191;    
    border-radius: 10px;     
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
