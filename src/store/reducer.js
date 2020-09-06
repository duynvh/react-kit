import { combineReducers } from 'redux'
import auth from 'containers/AuthPage/meta/reducer'
import products from 'containers/ProductPage/meta/reducer'

export default combineReducers({
  auth,
  products
})
