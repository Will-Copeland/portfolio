import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    // primary: {
    //   // main: '#F0F2F0',
    // },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      // color: '#FFF',
      fontFamily: '"Playfair Display", serif',
      borderBottom: '1px solid white',
      '@media (max-width: 960px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      // color: 'white',
      fontFamily: '"Playfair Display", serif',

      // borderBottom: '1px solid white',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      margin: '1rem',
    },
    h5: {
      // fontFamily: '"Playfair Display", serif',
      // color: '#FFF',
    },
    h6: {
      // color: '#FFF',
      fontSize: '1rem',

      '@media (min-width: 960px)': {
        fontSize: '2rem'
      },
    },
    subtitle1: {
      fontFamily: "'Montserrat', sans-serif",
      // color: 'white',
    },
    body1: {
      // color: 'white',
      fontSize: '1.2rem',
      fontFamily: "'Montserrat', sans-serif",
      lineHeight: '2rem',
      '@media (max-width: 960px)': {
        fontSize: '1rem',
      },
    },
  },
});


export default theme;
