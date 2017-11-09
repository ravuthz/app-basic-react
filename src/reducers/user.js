import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
    case USER_LOGGED_OUT:
      return action.user;
    default:
      return state;
  }
}
