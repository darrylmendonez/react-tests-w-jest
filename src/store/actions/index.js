import { types } from './types';
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  console.log('fetchPosts fired');
  await axios.get('http://jsonplaceholder.typicode.com/posts')
  .then(res => {
    console.log('res.data = ', res.data);
    dispatch({
      type: types.GET_POSTS,
      payload: res.data
    })
  })
  .catch(err => {
    // console.log(err);
  })
};