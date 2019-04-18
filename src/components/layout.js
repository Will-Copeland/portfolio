import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withStyles, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet';
import Theme from '../utils/Theme';
import Header from './Header';

const styles = {

};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultNameState: true,
    };
  }


  render() {
    const {
      classes, children
    } = this.props;
 

    return (

      <CssBaseline>
        <MuiThemeProvider theme={Theme}>
          <div className={classes.root}>
            <div
              style={{
                margin: '0 auto',
                width: '100%',
                paddingTop: 0,
                overflowY: 'hidden',
              }}
            >
              <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
              </Helmet>
              <Header />
              <main>{children}</main>
              <footer />
            </div>
          </div>
        </MuiThemeProvider>
      </CssBaseline>
    );
  }
}

export default withStyles(styles)(Layout);
