import { createStore } from "redux";

import { counter } from "../redux/reducers";

const store = createStore(counter);

export default store;
