import { combineReducers } from "redux";
import crudReducer from "./CrudReducer";

const mainReducer = combineReducers({
    crud : crudReducer
})

export default mainReducer