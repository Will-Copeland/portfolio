import React from 'react';
import { Link } from 'gatsby';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import Layout from '../components/layout';
import Jumbotron from '../components/Jumbotron';

import SEO from '../components/seo';
import Skills from '../components/Skills';
import Name from '../components/Name';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {

  }

  handleScroll = (page, cb) => {
    console.log(page);
    this.setState({ currentPage: page });
    setTimeout(() => cb(), 500);
  }

  render() {
    const { currentPage } = this.state;
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'William', 'react']} />
        {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Jumbotron />
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>

      </div> */}
        <Name atTop={currentPage > 0} />
        <Parallax style={{ top: -140 }} ref={ref => (this.parallax = ref)} pages={3}>
          <ParallaxLayer onClick={() => this.handleScroll(1, () => this.parallax.scrollTo(1))} offset={0.3} speed={0.3}>
            <Skills open={currentPage === 0} />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2}>
            <Jumbotron />
          </ParallaxLayer>
          <ParallaxLayer offset={2.1} speed={3}>
            <Jumbotron />
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={2.1}>
            <Jumbotron />
          </ParallaxLayer>
          <ParallaxLayer offset={1.8}>
            <Jumbotron />
          </ParallaxLayer>
        </Parallax>

      </Layout>
    );
  }
}

export default IndexPage;
