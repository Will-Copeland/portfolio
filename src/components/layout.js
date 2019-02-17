import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withStyles, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet';
import Background from '../images/bg2-1.webp';
import Header from './Header';
import Theme from '../utils/Theme';
import layout from './layout.css';

const styles = {
  layout: {
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'repeat',
  },
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
      classes, children, notOnIndex, handleInternalNav,
    } = this.props;
    let { onIndex } = this.props;
    const { defaultNameState } = this.state;

    // Because JS thinks undefined === true, I use another comparison
    // to force a true/false outcome. i.e. if onIndex is 'undefined' it
    // now becomes false
    onIndex = onIndex === true;
    // onIndex overrides defaultNameState
    const atTop = defaultNameState !== onIndex;

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

                {/* notOnIndex disables animation, otherwise runs on every page load */}
                <Header handleInternalNav={handleInternalNav} notOnIndex={notOnIndex} atTop={atTop} siteTitle={data.site.siteMetadata.title} />
                <div
                  style={{
                    margin: '0 auto',
                    width: '100%',
                    paddingTop: 0,
                    overflowY: 'hidden',
                  }}
                >
                  <Helmet>
                    <link href="https://fonts.googleapis.com/css?family=Unica+One" rel="stylesheet" />
                  </Helmet>
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

export default withStyles(styles)(Layout);
