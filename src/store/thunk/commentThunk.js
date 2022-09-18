import baseAPI from "../../api";
import {
  getCommentFailure,
  getCommentRequest,
  getCommentSuccess,
} from "../reducers/comment";

export const getCommentThunk = () => (dispatch, getState) => {
  dispatch(getCommentRequest());
  baseAPI
    .get("/comments")
    .then((res) => {
      dispatch(getCommentSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getCommentFailure(e));
    });
};
