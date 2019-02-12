import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import { GridListTile, GridListTileBar } from '@material-ui/core';


const styles = {

};

class ProjectCard extends PureComponent {
  render() {
    const {
      classes, imgPath, title, excerpt,
    } = this.props;
    return (
      <GridListTile key={title}>
        <img src={imgPath} alt={title} />
        <GridListTileBar
          title={title}
          subtitle={excerpt}
        />
      </GridListTile>
    );
  }
}

export default withStyles(styles)(ProjectCard);
