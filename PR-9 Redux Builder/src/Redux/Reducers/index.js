import { combineReducers } from "redux";
import notesReducer from "./NoteReducer";

const rootreducer = combineReducers({
  notes : notesReducer
})

export default rootreducer
