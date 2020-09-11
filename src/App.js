import React, { Suspense } from 'react'
import i18n from 'utils/i18n'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import RoutesComponent from 'shared/Routes/RoutesComponent'
import { BrowserRouter as Router } from 'react-router-dom'
import Spinner from 'components/Common/Spinner'
import store from 'store/store'

// the hoc
import { withTranslation } from 'react-i18next'

function App({ t }) {
  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <Router>
          <button onClick={() => changeLanguage('vn')}>vn</button>
          <button onClick={() => changeLanguage('en')}>en</button>
          <h1>{t('products')}</h1>
          <RoutesComponent />
        </Router>
      </Provider>
    </Suspense>
  )
}

export default withTranslation()(App)
