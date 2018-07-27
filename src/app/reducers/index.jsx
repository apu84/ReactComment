import {combineReducers} from 'redux';
import comments from './comments';
import users from './users';
import loggedInUser from './loggedInUser'

const allReducers = combineReducers({
  comments: comments,
  users: users,
  loggedInUser: loggedInUser
});

export default allReducers;