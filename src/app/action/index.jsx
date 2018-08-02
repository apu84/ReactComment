import {userService} from '../service/users'

export const editComment = (text, index) => {
  return {
    type: 'EDIT_COMMENT',
    payload: {
      index: index,
      text: text
    }
  };
};

export const removeComment = (index) => {
  return {
    type: 'REMOVE_COMMENT',
    payload: {
      index: index
    }
  };
};

export const addComment = () => {
  return {
    type: 'ADD_COMMENT'
  };
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

export const logout = (name) => {
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