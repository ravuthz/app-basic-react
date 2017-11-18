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

export const postNew = () => ({
  type: POST_NEW,
  post: {},
});

export const postCreate = post => ({
  type: POST_CREATE,
  post,
});

export const postFind = post => ({
  type: POST_FIND,
  post,
});

export const postList = posts => ({
  type: POST_LIST,
  posts,
});

export const postEdit = post => ({
  type: POST_EDIT,
  post,
});

export const postUpdate = post => ({
  type: POST_UPDATE,
  post,
});

export const postDelete = () => ({
  type: POST_DELETE,
  post: {},
});

export const newPost = () => dispatch => dispatch(postNew());

export const createPost = post => dispatch =>
  api.post.create(post).then(res => dispatch(postCreate(res)));

export const findPost = id => dispatch =>
  api.post.find(id).then(res => dispatch(postFind(res.data)));

export const listPosts = () => dispatch =>
  api.post.list().then(res => dispatch(postList(res.data)));

export const editPost = id => dispatch =>
  api.post.find(id).then(res => dispatch(postEdit(res.data)));

export const updatePost = (id, post) => dispatch =>
  api.post.update(id, post).then(res => dispatch(postUpdate(res)));

export const deletePost = id => dispatch =>
  api.post.delete(id).then(res => dispatch(postDelete(res)));
