import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import red from '@material-ui/core/colors/red';

export default () =>
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: 'hsl(0, 0%, 30%)',
      },
    },
    typography: {
      useNextVariants: true,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    overrides: {
      MuiButton: {
        label: {
          textTransform: 'capitalize',
        },
      },
    },
    status: {
      danger: red[500],
    },
  });
