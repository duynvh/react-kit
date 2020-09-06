import React from 'react'
import { Spin } from 'antd'
import SigninForm from '../../components/SigninForm/index'

const SigninPage = props => {
  const initialValues = {
    email: '',
    password: ''
  }

  const handleSubmit = values => {
    return new Promise(resolve => {
      setTimeout(() => {
        props.signin(values)
        resolve(true)
      }, 2000)
    })
  }

  return (
    <Spin spinning={props.isFetching}>
      <div className="container">
        <SigninForm initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </Spin>
  )
}

export default SigninPage
