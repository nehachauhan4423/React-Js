import { combineReducers } from "redux";
import crudReduce from "./CrudReducer";

const mainReducers = combineReducers({
    crudReduce
})

export default mainReducers