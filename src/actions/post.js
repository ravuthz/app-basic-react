import api from '../api';
import {
  POST_NEW,
  POST_CREATE,
  POST_FIND,
  POST_LIST,
  POST_EDIT,
  POST_UPDATE,
  POST_DELETE,
} from '../types';

export const defaultState = {
  posts: [],
  post: { title: '', content: '' },
  errors: {},
  loading: false,
};

export const defaultAction = (type, data) => {
  console.log(`defaultAction: type => ${type} data => `, data);
  return { type, data };
};

export const defaultListAction = (type, data, page) => {
  console.log(`defaultListAction: type => ${type} data => `, data);
  return { type, data, page };
};

export const newPost = () => dispatch => dispatch(defaultAction(POST_NEW, null));

export const createPost = post => dispatch =>
  api.post.create(post).then(res => dispatch(defaultAction(POST_CREATE, res)));

export const findPost = id => dispatch =>
  api.post.find(id).then(res => dispatch(defaultAction(POST_FIND, res.data)));

export const listPosts = () => dispatch =>
  api.post.list().then(res => dispatch(defaultListAction(POST_LIST, res.data, res.meta)));

export const editPost = id => dispatch =>
  api.post.find(id).then(res => dispatch(defaultAction(POST_EDIT, res.data)));

export const updatePost = (id, post) => dispatch =>
  api.post.update(id, post).then(res => dispatch(defaultAction(POST_UPDATE, res)));

export const deletePost = id => dispatch =>
  api.post.delete(id).then(res => dispatch(defaultAction(POST_DELETE, res)));
