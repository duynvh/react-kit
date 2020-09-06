import cookie from 'js-cookie'

cookie.defaults.expires = 1

const domain = window.location.hostname

const path = ''

// Save auth data to localstorage
export const saveDataToStorage = ({ token, tokenExpiryTime, user }) => {
  cookie.set('token', token, { domain, path })
  cookie.set('user', JSON.stringify(user), { domain, path })
  cookie.set('tokenExpiryTime', tokenExpiryTime, { domain, path })
}

// clear auth data from storage
export const clearDataFromStorage = () => {
  cookie.remove('token', { domain, path })
  cookie.remove('user', { domain, path })
  cookie.remove('tokenExpiryTime', { domain, path })
}

// get auth data from storage
export const getDataFromStorage = () => ({
  token: cookie.get('token', { domain, path }),
  user: cookie.get('user', { domain, path }),
  tokenExpiryTime: cookie.get('tokenExpiryTime', { domain, path })
})

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return true
  let data = cookie.get('token')

  if (data) {
    let token = JSON.parse(data).token.accessToken
    if (token) return token
  }

  return false
}
