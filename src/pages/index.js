import React from 'react';
import { Link } from 'gatsby';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import { withStyles } from '@material-ui/core';
import Layout from '../components/layout';
import Jumbotron from '../components/Jumbotron';

import SEO from '../components/seo';
import Skills from '../components/Skills';
import Name from '../components/Name';
import Work from '../components/Work';

const styles = {
  parallaxPage: {
    width: '100%',
    height: '100%',
  },
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {

  }

  handleScroll = (e, page, cb) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(page);
    this.setState({ currentPage: page });
    setTimeout(() => cb(), 500);
  }

  render() {
    const { classes } = this.props;
    const { currentPage } = this.state;
    console.log('currentPage', currentPage);

    return (
      <Layout>
        <Name atTop={currentPage > 0} />


        <SEO title="Will Copeland" keywords={['gatsby', 'William', 'react']} />
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <ParallaxLayer offset={0}>

            <div className={classes.parallaxPage} role="presentation" onClick={e => this.handleScroll(e, 1, () => this.parallax.scrollTo(0.5))}>

              <ParallaxLayer offset={0.3} speed={0.6}>
                <Jumbotron />

              </ParallaxLayer>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2}>


            <div className={classes.parallaxPage} role="presentation" onClick={e => this.handleScroll(e, 2, () => this.parallax.scrollTo(2))}>
              <ParallaxLayer offset={0.2} speed={1.3}>
                <Skills open={currentPage === 1} />

              </ParallaxLayer>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2}>
            <div className={classes.parallaxPage} role="presentation" onClick={e => this.handleScroll(e, 0, () => this.parallax.scrollTo(0))}>
              <ParallaxLayer offset={1.4} speed={1.3}>
                <Work open={currentPage === 2} />
              </ParallaxLayer>
            </div>

          </ParallaxLayer>
        </Parallax>

      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
