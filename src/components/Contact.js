import React from 'react';
import {
  withStyles, TextField, Button,
} from '@material-ui/core';

const styles = {
  root: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  nameEmail: {
    display: 'flex',
  },
  subject: {
    margin: 'auto',
  },
  field: {
    margin: '0.5rem',
  },
  hidden: {
    display: 'none',
  },
  button: {
    margin: 'auto',
    color: 'white',
    backgroundColor: 'black',
  },
};

class Contact extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} action="https://formspree.io/willcopeland34@gmail.com" method="POST">
        <div className={classes.nameEmail}>
          <TextField className={classes.field} name="name" label="Name" />
          <TextField className={classes.field} name="_replyto" label="Email" />
        </div>
        <div className={classes.subject}>
          <TextField className={classes.field} name="_subject" label="Subject" />
        </div>
        <TextField name="_gotcha" className={classes.hidden} />
        <TextField className={classes.field} name="text" label="Message" multiline variant="outlined" rows={3} />
        <Button className={classes.button} variant="contained" type="submit">Submit</Button>
      </form>
    );
  }
}


export default withStyles(styles)(Contact);
