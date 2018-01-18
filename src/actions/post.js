import api from '../api';
import postConstants from '../constants/post';

export const defaultState = {
  posts: [],
  post: { title: '', content: '' },
  errors: {},
  loading: false,
};

const success = (type, data) => ({ type, data });
const failure = (type, error) => ({ type, error });

// const success = (type, data) => ({ type, data, error: null });
// const failure = (type, error) => ({ type, data: null, error });

export const newPost = () => dispatch =>
  dispatch(success(postConstants.NEW, defaultState.post));

export const createPost = post => (dispatch) => {
  dispatch(success(postConstants.CREATE_REQUEST, post));
  return api.post.create(post).then(
    data => dispatch(success(postConstants.CREATE_SUCCESS, data)),
    error => dispatch(failure(postConstants.CREATE_FAILURE, error)));
};

export const deletePost = id => (dispatch) => {
  dispatch(success(postConstants.DELETE_REQUEST, id));
  return api.post.delete(id).then(
    data => dispatch(success(postConstants.DELETE_SUCCESS, data)),
    error => dispatch(failure(postConstants.DELETE_FAILURE, error)));
};

export const updatePost = (id, post) => (dispatch) => {
  dispatch(success(postConstants.UPDATE_REQUEST, id));
  return api.post.update(id, post).then(
    data => dispatch(success(postConstants.UPDATE_SUCCESS, data)),
    error => dispatch(failure(postConstants.UPDATE_FAILURE, error)));
};

export const showPost = id => (dispatch) => {
  dispatch(success(postConstants.SHOW_REQUEST, id));
  return api.post.find(id).then(
    data => dispatch(success(postConstants.SHOW_SUCCESS, data)),
    error => dispatch(failure(postConstants.SHOW_FAILURE, error)));
};

export const listPosts = () => (dispatch) => {
  dispatch(success(postConstants.LIST_REQUEST, null));
  return api.post.list().then(
    data => dispatch(success(postConstants.LIST_SUCCESS, data)),
    error => dispatch(failure(postConstants.LIST_FAILURE, error)));
};
