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
    },
    h5: {
      color: '#FFF',
    },
    h6: {
      color: '#FFF',
    },
  },
});


export default theme;
