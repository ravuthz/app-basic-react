import postConstants from '../constants/post';

export default function post(state = {}, action = {}) {
  // console.log(action.type, { state, action });
  switch (action.type) {
    case postConstants.LIST_REQUEST:
    case postConstants.SHOW_SCLIST_REQUEST:
    case postConstants.CREATE_SCLIST_REQUEST:
    case postConstants.DELETE_SCLIST_REQUEST:
    case postConstants.UPDATE_SCLIST_REQUEST:
      return {};

    case postConstants.LIST_FAILURE:
    case postConstants.SHOW_FAILURE:
    case postConstants.CREATE_FAILURE:
    case postConstants.DELETE_FAILURE:
    case postConstants.UPDATE_FAILURE:
      return { data: null, error: action.error };

    case postConstants.LIST_SUCCESS:
    case postConstants.SHOW_SCLIST_SUCCESS:
    case postConstants.CREATE_SCLIST_SUCCESS:
    case postConstants.DELETE_SCLIST_SUCCESS:
    case postConstants.UPDATE_SCLIST_SUCCESS:
      return { data: action.data, error: null };

    default:
      return state;
  }
}
