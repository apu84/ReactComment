import {combineReducers} from 'redux';
import comments from './comments';
import users from './users';
import loggedInUser from './loggedInUser'
import notifications from './notifications'

const allReducers = combineReducers({
  comments: comments,
  users: users,
  loggedInUser: loggedInUser,
  notifications: notifications
});

export default allReducers;