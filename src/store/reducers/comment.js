const GET_COMMENT_REQUEST = 'comment/GET_COMMENT_REQUEST';
const GET_COMMENT_SUCCESS = 'comment/GET_COMMENT_SUCCESS';
const GET_COMMENT_FAILURE = 'comment/GET_COMMENT_FAILURE';

export const getCommentRequest = () => ({
  type: GET_COMMENT_REQUEST
})
export const getCommentSuccess = (data) => ({
  type: GET_COMMENT_SUCCESS,
  payload: data,
})
export const getCommentFailure = (error) => ({
  type: GET_COMMENT_FAILURE,
  payload: error,
})

const initialState = {
  comment: [],
  commentLoading: true,
  commentError: null,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_COMMENT_REQUEST:
      return {
        ...state,
        commentLoading: true,
        commentError: null,
      }
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.payload,
        commentLoading: false,
      }
    case GET_COMMENT_FAILURE:
      return {
        ...state,
        commentLoading: false,
        commentError: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;