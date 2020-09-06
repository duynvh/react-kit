import React from 'react'
// import InputField from 'custom-fields/Formik/InputField';
import * as Yup from 'yup'
import { Button } from 'antd'
import { Formik, Form, FastField } from 'formik'
import { AntInput } from 'custom-fields/Antd/AntdWithFormik'
import PropTypes from 'prop-types'

SigninForm.propTypes = {
  onSubmit: PropTypes.func
}

SigninForm.defaultProps = {
  onSubmit: null
}

function SigninForm(props) {
  const { initialValues } = props

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required.'),
    password: Yup.string().required('Password is required.')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        // const { values, errors, touched } = formikProps
        // console.log({ values, errors, touched })
        return (
          <Form>
            <FastField
              type="text"
              name="email"
              component={AntInput}
              label="Email"
              placeholder="Please fill into email"
              hasFeedback
            />

            <FastField
              type="password"
              name="password"
              component={AntInput}
              label="Password"
              placeholder="Please fill into password"
              hasFeedback
            />

            <Button type="primary" htmlType="submit" block className="mt-3">
              Login
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default SigninForm
