import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { withStyles, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './header';
import Theme from '../utils/Theme';
import layout from './layout.css';

const styles = {
  layout: {
    height: '100vh',
    // width: '100vw',
    backgroundColor: 'black',
    overflowY: 'auto',
  },
};

class Layout extends React.PureComponent {
  render() {
    const { classes, children } = this.props;
    return (

      <CssBaseline>
        <MuiThemeProvider theme={Theme}>


          <StaticQuery
            query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
            render={data => (
              <div className={classes.layout}>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                  }}
                >
                  <main>{children}</main>
                  <footer>
            ©
                    {' '}
                    {new Date().getFullYear()}
, Built with
                    {' '}
                    {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
                  </footer>
                </div>
              </div>
            )}
          />
        </MuiThemeProvider>
      </CssBaseline>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
