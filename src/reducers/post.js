import { POST_LISTED, POST_SHOWN, POST_CREATED, POST_UPDATED, POST_DELETED } from '../types';

export default function post(state = {}, action = {}) {
  switch (action.type) {
    case POST_LISTED:
      return action.posts;

    case POST_SHOWN:
    case POST_CREATED:
    case POST_UPDATED:
    case POST_DELETED:
      return action.post;

    default:
      return state;
  }
}
