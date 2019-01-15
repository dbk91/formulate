import React from 'react';
import { saveAs } from 'file-saver';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import getTheme from './App.theme.js';
import AppBar from './components/AppBar';
import AppDrawer from './components/Drawer';
import createTemplate from './Template';
import './App.css';

const App = () => {
  const template = createTemplate({
    handleSubmitFunction: `setStatus(null);

    const res = await axios.post('/api/some/endpoint', values);
    const { status, data } = res;

    setSubmitting(false);
    setStatus(status);

    if (status === 200) {
      onSuccess();
    }
    `,
    fields: [{ name: 'one' }, { name: 'two' }],
  });

  const theme = getTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar />
      <AppDrawer />
      <button
        onClick={() => {
          const blob = new Blob([template], { type: 'text/javascript; charset=utf-8' });
          saveAs(blob, 'Form.jsx');
        }}
        style={{
          marginLeft: 200,
        }}
      >
        Save
      </button>
    </MuiThemeProvider>
  );
};

export default App;
