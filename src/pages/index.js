import React from 'react';
import { withStyles } from '@material-ui/core';
import Layout from '../components/layout';

import SEO from '../components/seo';
import Jumbotron from '../components/Jumbotron';


const styles = {

};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const { currentPage } = this.state;
    return (
      <Layout handleInternalNav={this.handleInternalNav} onIndex={currentPage === 0} handleWorkClick={this.handleWorkClick}>
        <SEO title="Will Copeland" keywords={['Frontend', 'Developer', 'React', 'React.js']} />
        <Jumbotron />
      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
