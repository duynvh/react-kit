import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

function InputField(props) {
  const { field, form, type, label } = props

  const { name } = field
  const { errors, touched } = form

  return (
    <Form.Item
      hasFeedback={!!errors[name]}
      validateStatus={errors[name] && 'error'}
      help={errors[name]}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <Input type={type} id={name} {...field} />
    </Form.Item>
  )
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false
}

export default InputField
