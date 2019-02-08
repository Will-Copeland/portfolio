import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { withStyles, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Background from '../images/bg2-1.webp';
import Header from './Header';
import Theme from '../utils/Theme';
import layout from './layout.css';

const styles = {
  layout: {
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
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
                    width: '100%',
                    padding: '0 1.0875rem 0',
                    paddingTop: 0,
                    overflowY: 'hidden',
                  }}
                >
                  <main style={{ width: 'fit-content' }}>{children}</main>
                  <footer />
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
