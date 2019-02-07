// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Spring } from 'react-spring';
// import { withStyles, Typography } from '@material-ui/core';
// import { StaticQuery, graphql } from 'gatsby';
// import CustomList from './CustomList';

// const styles = theme => ({
//   root: {
//     display: 'inline-block',
//     position: 'relative',
//   },
//   list: {
//     display: 'flex',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   title: {
//     backgroundColor: 'black',
//   },
// });

// class Skills extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//     };
//   }

//   handleState() {
//     this.setState(state => ({ open: !state.open }));
//   }

//   render() {
//     const { classes } = this.props;
//     const { open } = this.state;
//     return (
//       <StaticQuery
//         query={graphql`
//             query SkillsQuery {
//                 site {
//                     siteMetadata {
//                         skills {
//                             proficient,
//                             workingKnowledge
//                         }
//                     }
//                 }
//             }`}

//         render={data => (

//           <div className={classes.root}>

//             <Typography className={classes.title} onClick={() => this.handleState()} variant="h1">
//                 Skills
//             </Typography>
//             <div className={classes.list}>
//               <Spring
//                 delay={!open ? 375 : 0}
//                 from={{ opacity: 0, bottom: 1000 }}
//                 to={{ opacity: open ? 1 : 0, bottom: open ? 0 : 1000 }}
//               >
//                 {props => (
//                   <div className={classes.list} style={props}>
//                     <CustomList open={open} fadeRight title="Proficient" items={data.site.siteMetadata.skills.proficient} />
//                     <CustomList open={open} title="Experience With" items={data.site.siteMetadata.skills.workingKnowledge} />
//                   </div>
//                 )}
//               </Spring>

//             </div>
//           </div>
//         )}
//       />
//     );
//   }
// }
// Skills.propTypes = {
//   classes: PropTypes.objectOf.isRequired,
// };

// export default withStyles(styles)(Skills);
