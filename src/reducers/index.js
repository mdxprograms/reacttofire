import { combineReducers } from 'redux';

const user = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        ...state,
        user: {
          uid: action.loggedIn.uid,
          email: action.loggedIn.email,
          loggedIn: action.loggedIn ? true : false
        }
      }
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user
})

export default rootReducer;

