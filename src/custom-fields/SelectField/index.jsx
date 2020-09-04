import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';

function SelectField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name } = field;
  const selectedOption = options.find(option => option.value === value);
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;
    const changeEvent = {
      target: {
        name,
        value: selectedValue,
      }
    };

    field.onChange(changeEvent);
  }

  return (
    <Form>
      {label && <label for={name}>{label}</label>}
      <Select 
        id={name}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        invalid={showError}
        {...field}
      />
    </Form>
  )
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  options: [],
};

export default SelectField