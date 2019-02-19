import React from 'react';
import { Link } from 'gatsby';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import { withStyles } from '@material-ui/core';
import Layout from '../components/layout';
import Jumbotron from '../components/Jumbotron';

import SEO from '../components/seo';
import Skills from '../components/Skills';
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
    const { currentPage } = this.state;
    const { location } = this.props;
    try {
      if (location.state.scrollTo !== null) {
        if (location.state.scrollTo && location.state.scrollTo !== currentPage) {
          this.handleScroll(location.state.scrollTo);
        }
      }
    } catch (e) {
      // Stop error on page load with no link scrolling
    }
  }

  handleInternalNav = (page) => {
    const { currentPage } = this.state;

    if (currentPage !== page) {
      this.handleScroll(page);
    }
  }

  handleScroll = (page) => {

    this.setState({ currentPage: page });
    setTimeout(() => this.parallax.scrollTo(page), 500);
  }

  render() {
    const { classes } = this.props;
    const { currentPage } = this.state;
    return (
      // identifies if user is on Index && current(parallax)Page is 0
      // handleInternalNav will trigger if user is already on Index, as <Link /> wont fire
      <Layout handleInternalNav={this.handleInternalNav} onIndex={currentPage === 0} handleWorkClick={this.handleWorkClick}>
        <SEO title="Will Copeland" keywords={['Frontend', 'Developer', 'React', 'React.js']} />
        <Parallax scrolling={false} ref={ref => (this.parallax = ref)} pages={3}>
          <ParallaxLayer className={classes.parallaxPage} onClick={() => this.handleScroll(1)} offset={0}>
            <Jumbotron open={currentPage === 0} />
          </ParallaxLayer>
          <ParallaxLayer className={classes.parallaxPage} onClick={() => this.handleScroll(2)} offset={1} speed={0.2}>
            <Skills open={currentPage === 1} />
          </ParallaxLayer>
          <ParallaxLayer className={classes.parallaxPage} onClick={() => this.handleScroll(0)} offset={2}>
            <Work open={currentPage === 2} />
          </ParallaxLayer>
        </Parallax>
      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
