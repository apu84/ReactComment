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

export const addUser = (name, password) => {
  return {
    type: 'ADD_USER',
    payload: {
      name: name,
      password: password
    }
  }
};

export const login = (name, password, users) => {
  return {
    type: 'LOGIN_USER',
    payload: {
      name: name,
      password: password,
      users: users
    }
  }
};

export const logout = (name) => {
  return {
    type: 'LOGOUT_USER',
    payload: {
      name: name
    }
  }
};