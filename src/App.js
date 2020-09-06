import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import RoutesComponent from 'shared/Routes/RoutesComponent'
import { BrowserRouter as Router } from 'react-router-dom'
import Spinner from 'components/Common/Spinner'
import store from 'store/store'

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <Router>
          <RoutesComponent />
        </Router>
      </Provider>
    </Suspense>
  )
}

export default App
