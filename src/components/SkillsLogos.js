import React, { PureComponent } from 'react';
import { Trail } from 'react-spring';
import materialUiLogo from '../images/material-ui-logo.svg';
import graphqlLogo from '../images/graphql-logo.png';
import reactLogo from '../images/react-logo.svg';
import jsLogo from '../images/js-logo.png';
import css3Logo from '../images/css3-logo.png';
import SkillIcon from './SkillIcon';

class SkillsLogos extends PureComponent {
  render() {
    const items = [
      { img: reactLogo, title: 'React.js' },
      { img: jsLogo, title: 'JavaScript' },
      { img: css3Logo, title: 'CSS 3' },
      { img: materialUiLogo, title: 'Material-UI' },
      { img: graphqlLogo, title: 'GraphQL' },
    ];
    const { open } = this.props;
    return (
      <Trail
        delay={!open ? 800 : 700}
        items={items}
        reverse={!open}
        keys={item => item.title}
        from={{ transform: 'translate3d(0,-400px,0)' }}
        to={open ? { transform: 'translate3d(0, 0,0)' } : { transform: 'translate3d(0,-4000px,0)' }}
      >
        {item => props => <SkillIcon style={props} trail={props} logo={item.img} title={item.title} />}
      </Trail>

    );
  }
}


export default SkillsLogos;
