import { 
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import { Auth } from '../lib';
import rootReducer from '../reducers';

export default createStore(rootReducer, applyMiddleware(thunk))


