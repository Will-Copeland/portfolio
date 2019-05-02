import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import About from './About';

class PageContainer extends Component {
  static propTypes = {};

  render() {
    const { classes, currentPage } = this.props;

    const pages = [<h1>HI</h1>, <Contact />, <About />];
    return pages[currentPage];
  }
}

export default PageContainer;
