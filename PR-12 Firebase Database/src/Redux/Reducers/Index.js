import { combineReducers } from 'redux'
import todoReducer from './TodoReducer';


const rootReduser = combineReducers({
    todo : todoReducer

})
export default rootReduser;