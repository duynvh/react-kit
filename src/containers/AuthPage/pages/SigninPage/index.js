import { connect } from 'react-redux'
import { signin } from '../../meta/actions'
import {
  selectUser,
  selectIsAuthFetching,
  selectAuthErrorMessage
} from '../../meta/selectors'
import { createStructuredSelector } from 'reselect'
import SigninPage from './SigninPage'

const mapStateToProps = createStructuredSelector({
  user: state => selectUser(state),
  errorMessage: state => selectAuthErrorMessage(state),
  isFetching: state => selectIsAuthFetching(state)
})

const mapDispatchToProps = dispatch => ({
  signin: body => dispatch(signin(body))
})

const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(SigninPage)

export default SigninContainer
