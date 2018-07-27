export default function (state = null, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return loginUser(action.payload);
    case 'LOGOUT_USER':
      return logoutUser(state, action.payload);
    default:
      return state;
  }
}

function loginUser(payload) {
  return {
    name: payload.name,
    password: payload.password
  }
}

function logoutUser(state, payload) {
  if (state && state.name === payload.name) {
    return null;
  }
  else return {
    name: state.name,
    password: state.password
  }
}