import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

function InputField(props) {
  const { name, type, label, rules } = props

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Input type={type} id={name} {...props} />
    </>
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
