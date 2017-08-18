import { Auth } from '../lib';

export const loggedIn = () => {
  return {
    type: 'USER_LOGGED_IN',
    loggedIn: Auth.fbConfig.auth().currentUser ? true : false
  }
}

export const login = (email, password) => {
  return {
    type: 'USER_LOGIN',
    user: Auth.signIn(email, password)
  }
}

export const logout = () => {
  return {
    type: 'USER_LOGOUT',
    user: null,
  }
}
