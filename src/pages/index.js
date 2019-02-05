import React from 'react';
import { Link } from 'gatsby';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import Layout from '../components/layout';
import Jumbotron from '../components/Jumbotron';

import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Jumbotron />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>

    </div> */}
    <Parallax pages={3}>
      <ParallaxLayer offset={0}>
        <Jumbotron />
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

export default IndexPage;
