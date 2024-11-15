import { combineReducers } from "redux";
import crudReducer from "./Reducer/CrudReducer";

const mainReducers = combineReducers({
    crudReducer
})

export default mainReducers