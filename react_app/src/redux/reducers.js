import { ADD, DELETE, RECEIVE } from "./action-types";

export function comments(state = [], action) {
  switch (action.type) {
    case ADD:
      return [action.data, ...state];
    case DELETE:
      return state.filter((comment, index) => index !== action.data);
    case RECEIVE:
      return action.data;
    default:
      return state;
  }
}
