// libs
import { combineReducers } from "redux";
// reducers
import { reducer as formReducer } from "redux-form";

const rootReducer = () => combineReducers({ formReducer });

export default rootReducer;
