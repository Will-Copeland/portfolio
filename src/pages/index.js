import React from 'react';
import { withStyles } from '@material-ui/core';
import Layout from '../components/layout';

import SEO from '../components/seo';


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
      // identifies if user is on Index && current(parallax)Page is 0
      // handleInternalNav will trigger if user is already on Index, as <Link /> wont fire
      <Layout handleInternalNav={this.handleInternalNav} onIndex={currentPage === 0} handleWorkClick={this.handleWorkClick}>
        <SEO title="Will Copeland" keywords={['Frontend', 'Developer', 'React', 'React.js']} />
        
      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
