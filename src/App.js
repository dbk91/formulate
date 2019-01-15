import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';

import getTheme from './App.theme.js';
import styles from './App.styles';
import AppBar from './components/AppBar';
import AppDrawer from './components/Drawer';
import createTemplate from './Template';
import './App.css';

const App = ({ classes }) => {
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
  const [generatedForm, setGeneratedForm] = useState([]);
  const [theme, setTheme] = useState(getTheme());
  console.log(generatedForm);

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar />
      <AppDrawer setGeneratedForm={setGeneratedForm} />
      <div className={classes.content}>
        <form>
          {generatedForm.map(field => (
            <>
              <label>{field.label}</label>
              <input key={field.name} name={field.name} type={field.dataType} />
            </>
          ))}
        </form>
      </div>
      {/*<button
        onClick={() => {
          const blob = new Blob([template], { type: 'text/javascript; charset=utf-8' });
          saveAs(blob, 'Form.jsx');
        }}
        style={{
          marginLeft: 200,
        }}
      >
        Save
      </button>*/}
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(App);
