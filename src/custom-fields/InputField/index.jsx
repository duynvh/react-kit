import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

function InputField(props) {
  const {
    field, form,
    type, label, placeholder, disabled
  } = props;

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <Form>
      {label && <label for={name}>{label}</label>}
      <Input 
        type={type}
        id={name}
        invalid={showError}
        {...field}
      />
    </Form>
  )
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false
};

export default InputField