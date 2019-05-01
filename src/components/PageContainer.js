import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

class PageContainer extends Component {
  static propTypes = {};

  render() {
    const { classes, currentPage } = this.props;

    const pages = [<h1>HI</h1>, <Contact />, <h1>Hello There</h1>];
    return pages[currentPage];
  }
}

export default PageContainer;
