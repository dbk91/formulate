export default ({ handleSubmitFunction, fields }) =>
  `import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Field } from 'formik';

const Form = ({
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    ${fields.map(
      field =>
        `<Field
       name="${field.name}"
       render={({ field }) => (
         <input
          {...field}
          type="text"
         />
       )}
     />`
    )}
  </form>
);

export default withFormik({
  handleSubmit: async ({
    setSubmitting,
    setStatus,
    props: { onSuccess },
  }) => {
    ${handleSubmitFunction}
  },
})(Form);
`;
