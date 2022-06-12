import {
  FETCH_BLOG_POSTS_FAILURE,
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POSTS_SUCCESS
} from "./action.types";

let initialise = {
  blogs: [],
  loading: false,
  error: false
};

const blogReducer = (state = initialise, { type, payload }) => {
  switch (type) {
    case FETCH_BLOG_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case FETCH_BLOG_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        blogs: payload
      };
    }
    case FETCH_BLOG_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:
      return state;
  }
};

export default blogReducer;
