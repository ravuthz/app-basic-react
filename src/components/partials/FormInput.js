import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

import InlineError from '../messages/InlineError';

const FormInput = ({ type, name, label, error, value, required, onChange }) => (
  <Form.Field error={!!error}>
    <Input
      required={required}
      id={name}
      name={name}
      type={type}
      label={label}
      placeholder="Enter your title ..."
      value={value}
      onChange={onChange}
    />
    {error && <InlineError text={error} />}
  </Form.Field>
);

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
