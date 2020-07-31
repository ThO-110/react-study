import { INCREMENT, DECREMENT } from "./action-types";

/* 
  包含所有 action creator
*/
export const increment = (add) => ({ type: INCREMENT, data: add });
export const decrement = (add) => ({ type: DECREMENT, data: add });
