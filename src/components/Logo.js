import React from 'react';
import logo from '../images/logo1.png';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */


const Logo = classes => (
  <img
    className={classes.root}
    style={
      {
        width: '5rem',
        margin: '1rem 0 0 1rem'
      }
  }
    alt="logo"
    src={logo}
  />

);
export default Logo;
