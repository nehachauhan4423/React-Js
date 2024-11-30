import { createStore } from "redux";
import rootReduser from "./Reducers/TodoReducer";

const store = createStore(rootReduser)

export default store;