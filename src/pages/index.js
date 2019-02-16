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
    console.log(location);
    
    try {
      if (location.state.scrollTo !== null) {
        if (location.state.scrollTo && location.state.scrollTo !== currentPage) {
          this.handleScroll(location.state.scrollTo);
        }
      }
    } catch (e) {
      console.log(e);
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
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <ParallaxLayer offset={0}>

            <div className={classes.parallaxPage} role="presentation" onClick={() => this.handleScroll(1)}>

              <Jumbotron />

            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2}>
            <div className={classes.parallaxPage} role="presentation" onClick={() => this.handleScroll(2)}>
              <Skills open={currentPage === 1} />

            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2}>
            <div onClick={() => this.handleScroll(0)} className={classes.parallaxPage} role="presentation">

              <Work open={currentPage === 2} />


            </div>
          </ParallaxLayer>
        </Parallax>

      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
