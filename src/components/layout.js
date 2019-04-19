import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet';
import Theme from '../utils/Theme';

const styles = {
};

class Layout extends React.PureComponent {
  render() {
    const {
      classes, children,
    } = this.props;


    return (

      <CssBaseline>
        <MuiThemeProvider theme={Theme}>
          <React.Fragment>
            <Helmet>
              <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
            </Helmet>
            <main>{children}</main>
          </React.Fragment>
        </MuiThemeProvider>
      </CssBaseline>
    );
  }
}

export default withStyles(styles)(Layout);
