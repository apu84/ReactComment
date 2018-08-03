import {userService} from '../service/users'
import {commentService} from "../service/comments";

export const getLoggedInUser = () => {
  return dispatch => {
    userService.getLoggedInUser()
        .then((user) => dispatch(loginSuccess(user)))
        .catch((error) => dispatch(noLoggedInUser()));
  };
};

export const getAllComments = () => {
    return dispatch => {
      commentService.getAllComments().then((comments) => {
        return dispatch(getAllCommentsSuccess(comments));
      });
    }
};

export const getAllCommentsSuccess = (comments) => {
  return {
    type: 'GETALL_COMMENTS_SUCCESS',
    payload: {
      comments: comments
    }
  }
};

export const editComment = (user, commentText, index) => {
  return dispatch => {
    commentService.saveComment(user, commentText, index)
        .then((comments) => {
          return dispatch(getAllCommentsSuccess(comments))
        });
  }
};

export const removeComment = (user, index) => {
  return dispatch => {
    commentService.removeComment(user, index)
        .then((comments) => {
          return dispatch(getAllCommentsSuccess(comments))
        });
  }
};

export const resetNotifications = () => {
  return {
    type: 'RESET_NOTIFICATIONS'
  }
};

export const addUser = (name, password) => {
  return dispatch => {
    userService.register(name, password)
        .then((user) => dispatch(registrationSuccess(user)))
        .catch((error) => dispatch(registrationError(error)));
  };
};

export const login = (name, password) => {
  return dispatch => {
    userService.login(name, password)
        .then((user) => dispatch(loginSuccess(user)))
        .catch((error) => dispatch(loginError(error)));
  }
};

export const logout = (userName) => {
  return dispatch => {
    userService.logout(userName)
        .then(() => dispatch(logoutSuccess(userName)))
        .catch((error) => dispatch(loginError(error)));
  };
};

export const logoutSuccess = (name) => {
  return [{
    type: 'LOGOUT_USER',
    payload: {
      name: name
    }
  },
    {
      type: 'UNSET_USER',
      payload: {
        name: name
      }
    }
  ]
};

export const loginSuccess = (user) => {
  return [{
    type: 'LOGIN_SUCCESS',
    payload: {
      user: user
    }
  },
    {
      type: 'SET_USER',
      payload: {
        user: user
      }
    }]
};

export const loginError = (text) => {
  return {
    type: 'LOGIN_ERROR',
    payload: {
      text: text
    }
  }
};

export const noLoggedInUser = () => {
  return {
    type: 'NO_LOGGED_IN_USER'
  }
}

export const registrationSuccess = (user) => {
  return {
    type: 'REGISTRATION_SUCCESS',
    payload: {
      text: 'Successfully registered user, ' + user.username
    }
  }
};

export const registrationError = (text) => {
  return {
    type: 'REGISTRATION_ERROR',
    payload: {
      text: text
    }
  }
};