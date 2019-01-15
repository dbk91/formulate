import React from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './AppBar.styles';

const AppBar = ({ classes }) => (
  <MuiAppBar position="fixed" className={classes.root}>
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Formulate
      </Typography>
    </Toolbar>
  </MuiAppBar>
);

AppBar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AppBar);
