import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
  },
  typography: {
    fontFamily:  '"Playfair Display", serif',
    h1: {
      color: '#FFF',
      borderBottom: '1px solid white',
      '@media (max-width: 960px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      color: 'white',
      borderBottom: '1px solid white',
    },
    h3: {
      color: '#FFF',
      margin: '1rem'
    },
    h5: {
      color: '#FFF',
    },
    h6: {
      color: '#FFF',
    },
    subtitle1: {
      color: 'white'
    },
    body1: {
      color: 'white',
      fontSize: '1.2rem',
      lineHeight: '2rem',
      '@media (max-width: 960px)': {
        fontSize: '1rem',
      },
    }
  },
});


export default theme;
