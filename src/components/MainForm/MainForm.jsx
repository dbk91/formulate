import React, { useEffect } from 'react';
import { withFormik, FieldArray, FastField } from 'formik';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';

import fieldEntry from './fieldEntry';
import styles from './MainForm.styles';

const MainForm = ({ handleSubmit, values, setGeneratedForm, classes }) => {
  useEffect(
    () => {
      setGeneratedForm(values.fields);
    },
    [values]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" className={classes.formSegment}>
        Form Fields
      </Typography>
      <FieldArray
        name="fields"
        render={({ insert, remove, push }) => {
          return values.fields && values.fields.length > 0 ? (
            <>
              {values.fields.map((field, index) => (
                <div key={index}>
                  <Typography>Name: {field.name}</Typography>
                  <FastField
                    name={`fields.${index}.name`}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Field Name"
                        autoComplete="off"
                        variant="outlined"
                        margin="dense"
                      />
                    )}
                  />
                  <FastField
                    name={`fields.${index}.label`}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Field Label"
                        autoComplete="off"
                        variant="outlined"
                        margin="dense"
                      />
                    )}
                  />
                  <FastField
                    name={`fields.${index}.dataType`}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        select
                        label="Field Data Type"
                        autoComplete="off"
                        variant="outlined"
                        margin="dense"
                        SelectProps={{
                          native: true,
                        }}
                        style={{ width: '100%' }}
                      >
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                        <option value="password">Password</option>
                      </TextField>
                    )}
                  />
                  <Button
                    variant="outlined"
                    onClick={() => remove(index)}
                    className={classes.removeButton}
                  >
                    Remove
                  </Button>
                  {index !== values.fields.length - 1 && <Divider className={classes.divider} />}
                </div>
              ))}
              <Button
                variant="outlined"
                onClick={() => push(fieldEntry)}
                fullWidth
                className={classes.addFieldButton}
              >
                Add field
              </Button>
            </>
          ) : (
            <>
              <Typography className={classes.getStartedText}>Start by adding a field!</Typography>
              <Button
                variant="outlined"
                onClick={() => push(fieldEntry)}
                fullWidth
                className={classes.addFieldButton}
              >
                Add field
              </Button>
            </>
          );
        }}
      />
    </form>
  );
};

export default withFormik({
  handleSubmit: () => {},
  mapPropsToValues: () => ({
    fields: [],
  }),
})(withStyles(styles)(MainForm));
