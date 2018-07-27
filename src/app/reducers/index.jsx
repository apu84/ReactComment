import {combineReducers} from 'redux';
import comments from "./comments";

const allReducers = combineReducers({
  comments: comments
});

export default allReducers;