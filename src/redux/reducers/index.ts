import { StudentsReducer } from "./students";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  Students: StudentsReducer,
});
