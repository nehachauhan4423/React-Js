import { createStore } from "redux";
import mainReducer from "./Reducers/Index";

const store = createStore(mainReducer)

export default store;