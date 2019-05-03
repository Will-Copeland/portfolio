/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { withStyles } from '@material-ui/core';
import { Spring, config } from 'react-spring';
import Layout from '../utils/layout';
import Intro from '../components/Intro';
import Detail from '../components/Detail';

const styles = {
  root: {
    width: '100vw',
    height: '100vh',
  },
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
    };
  }

  handleClick = () => {
    this.setState({ showDetail: true });
  }

  renderDetail = () => (
    <Spring
      from={{ opacity: -1 }}
      to={{ opacity: 1 }}
      config={config.molasses}
    >
      {props => (
        <div style={props}>
          <Detail />
        </div>
      )}
    </Spring>
  )

  render() {
    const { classes } = this.props;
    const { showDetail } = this.state;
    setTimeout(this.handleClick, 2000);
    return (
      <Layout>
        <div className={classes.root} onClick={() => this.handleClick()}>
          {!showDetail ? <Intro showDetail={showDetail} /> : null}
          {showDetail ? this.renderDetail() : null}
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Index);
