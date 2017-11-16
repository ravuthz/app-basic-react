import { combineReducers } from 'redux';

import user from './reducers/user';
import post from './reducers/post';

export default combineReducers({
  user,
  post,
});
