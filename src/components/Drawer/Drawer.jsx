import React from 'react';
import PropTypes from 'prop-types';
import MuiDrawer from '@material-ui/core/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './Drawer.styles';
import MainForm from '../MainForm';

const AppDrawer = ({ setGeneratedForm, classes }) => (
  <MuiDrawer
    variant="permanent"
    className={classes.root}
    classes={{
      paper: classes.paper,
    }}
  >
    <div className={classes.toolbar} />
    <MainForm setGeneratedForm={setGeneratedForm} />
  </MuiDrawer>
);

AppDrawer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AppDrawer);
