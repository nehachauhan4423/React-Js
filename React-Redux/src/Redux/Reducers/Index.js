import { combineReducers } from "redux";
import Counter from "./CounterReducer";

const mainReducers = combineReducers(
{
       cnt : Counter
}
)
export default mainReducers    