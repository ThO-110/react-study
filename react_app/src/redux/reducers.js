import { ADD, DELETE } from "./action-types";
const initComments = [
  {
    userName: "XXX",
    commentContent: "something useful...",
  },
  {
    userName: "yyy",
    commentContent: "something useful...",
  },
];

export function comments(state = initComments, action) {
  switch (action.type) {
    case ADD:
      return [action.data, ...state];
    case DELETE:
      return state.filter((comment, index) => index !== action.data);
    default:
      return state;
  }
}
