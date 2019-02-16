import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
  },
  typography: {
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
    }
  },
});


export default theme;
