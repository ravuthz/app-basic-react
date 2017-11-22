import {
  POST_NEW,
  POST_CREATE,
  POST_LIST,
  POST_FIND,
  POST_EDIT,
  POST_UPDATE,
  POST_DELETE,
} from '../types';

export default function post(state = {}, action = {}) {
  switch (action.type) {
    case POST_LIST:
      return { data: action.data, page: action.page };
    case POST_NEW:
    case POST_CREATE:
    case POST_FIND:
    case POST_EDIT:
    case POST_UPDATE:
    case POST_DELETE:
      return action.data;

    default:
      return state;
  }
}
