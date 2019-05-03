import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import About from './About';
import Work from './Work';

class PageContainer extends Component {

  render() {
    const { currentPage } = this.props;
    const pages = [<Work />, <Contact />, <About />];

    return pages[currentPage];
  }
}

PageContainer.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default PageContainer;
