export const drawerWidth = 240;

export default theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  paper: {
    width: drawerWidth,
    padding: theme.spacing.unit * 2,
    boxSizing: 'border-box',
  },
  toolbar: theme.mixins.toolbar,
});
