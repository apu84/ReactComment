export default function (state = null, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return loginSuccess(state, action.payload.user);
    case "LOGIN_ERROR":
      return loginError(state, action.payload.text);
    case "REGISTRATION_SUCCESS":
      return {type: 'registration', success: true, text: action.payload.text};
    case "REGISTRATION_ERROR":
      return {type: 'registration', success: false, text: action.payload.text};
    case "RESET_NOTIFICATIONS":
      return null;
    case "NO_LOGGED_IN_USER":
      return null;
    default:
      return state;
  }
}

function loginSuccess(state, user) {
  return {user: user, type: 'login', success: true};
}

function loginError(state, text) {
  return {type: 'login', success: false, text: text};
}
