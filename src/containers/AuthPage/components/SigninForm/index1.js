import React from 'react'
import InputField from 'custom-fields/InputField'
import { Form, Button } from 'antd'
import PropTypes from 'prop-types'

SigninForm.propTypes = {
  onSubmit: PropTypes.func
}

SigninForm.defaultProps = {
  onSubmit: null
}

function SigninForm(props) {
  return (
    <Form layout="vertical">
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your E-mail!'
          }
        ]}
      >
        <InputField
          label="Email"
          type="text"
          placeholder="Email"
          name="email"
        />
      </Form.Item>

      <Form.Item
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
        name="password"
      >
        <InputField label="Password" type="password" name="password" />
      </Form.Item>

      <Button type="primary" htmlType="submit" className="mt-3">
        Login
      </Button>
    </Form>
  )
}

export default SigninForm
