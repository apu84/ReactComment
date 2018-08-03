import {combineReducers} from 'redux';
import comments from './comments';
import loggedInUser from './loggedInUser'
import notifications from './notifications'

const allReducers = combineReducers({
  comments: comments,
  loggedInUser: loggedInUser,
  notifications: notifications
});

export default allReducers;