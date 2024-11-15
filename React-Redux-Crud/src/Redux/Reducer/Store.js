import { createStore } from "redux";
import mainReducers from "..";


const store = createStore(mainReducers);

export default store