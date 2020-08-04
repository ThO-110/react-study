import { ADD, DELETE } from "./action-types";

export const addComment = (comment) => ({ type: ADD, data: comment });
export const deleteComment = (index) => ({ type: DELETE, data: index });
