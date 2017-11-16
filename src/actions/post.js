import api from '../api';
import { POST_LISTED, POST_SHOWN, POST_CREATED, POST_UPDATED, POST_DELETED } from '../types';

export const postShown = post => ({
  type: POST_SHOWN,
  post,
});

export const postListed = posts => ({
  type: POST_LISTED,
  posts,
});

export const postCreated = post => ({
  type: POST_CREATED,
  post,
});

export const postUpdated = post => ({
  type: POST_UPDATED,
  post,
});

export const postDeleted = () => ({
  type: POST_DELETED,
  post: {},
});

export const findPost = id => dispatch =>
  api.post.find(id).then(res => dispatch(postShown(res.data)));

export const listPosts = () => dispatch =>
  api.post.list().then(res => dispatch(postListed(res.data)));

export const createPost = post => dispatch =>
  api.post.create(post).then(res => dispatch(postCreated(res)));

export const updatePost = (id, post) => dispatch =>
  api.post.update(id, post).then(res => dispatch(postUpdated(res)));

export const deletePost = id => dispatch =>
  api.post.delete(id).then(res => dispatch(postDeleted(res)));
