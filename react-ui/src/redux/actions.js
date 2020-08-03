import { INCREMENT, DECREMENT } from "./action-types";

/* 
  包含所有 action creator
*/
export const increment = (add) => ({ type: INCREMENT, data: add });
export const decrement = (add) => ({ type: DECREMENT, data: add });
// 异步action
export const incrementAsync = (add) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(add));
    }, 1000);
  };
};
