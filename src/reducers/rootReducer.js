import { combineReducers } from 'redux';
import headerReducer from "./headerReducer.js";
import appReducer from "./appReducer.js";
import navReducer from "./navReducer.js";

const rootReducer = combineReducers({
  headerReducer,
  appReducer,
  navReducer
});

export default rootReducer;