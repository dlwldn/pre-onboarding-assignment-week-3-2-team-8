import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CommentList from "../components/CommentList";
import { getCommentThunk } from "../store/thunk/commentThunk";

function CommentListContainer() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getCommentThunk())
  }, [])
  return <CommentList />;
}

export default CommentListContainer;
