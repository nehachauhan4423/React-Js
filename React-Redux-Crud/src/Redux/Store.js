import { createStore } from "redux";
import mainReducers from "./Reducers/Index";

const store = createStore(mainReducers)

export default store