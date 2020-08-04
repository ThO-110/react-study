import { ADD, DELETE, RECEIVE } from "./action-types";
// 同步actions
export const addComment = (comment) => ({ type: ADD, data: comment });
export const deleteComment = (index) => ({ type: DELETE, data: index });
export const receiveComments = (comments) => ({
  type: RECEIVE,
  data: comments,
});
// 异步actions
export const initComment = (comments) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(receiveComments(comments));
    }, 2000);
  };
};
