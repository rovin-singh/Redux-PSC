import {
  FETCH_BLOG_POSTS_FAILURE,
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POSTS_SUCCESS
} from "./action.types";
import axios from "axios";
// export const fetchblogPostRequest = (payload) => {
//   return { type: FETCH_BLOG_POSTS_REQUEST, payload };
// };
// export const fetchBlogPostSuccess = (payload) => {
//   return { type: FETCH_BLOG_POSTS_SUCCESS, payload };
// };

// export const fetchBlogPostFailure = (payload) => {
//   return { type: FETCH_BLOG_POSTS_FAILURE, payload };
// };

export const fetchBlogPost = () => (dispatch) => {
  // request
  dispatch({ type: FETCH_BLOG_POSTS_REQUEST });
  // success
  axios
    .get("http://localhost:8080/blogs")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_BLOG_POSTS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: FETCH_BLOG_POSTS_FAILURE });
    });
};
