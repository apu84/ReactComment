export default function (state = null, action) {
  switch (action.type) {
    case 'SET_USER':
      return setUser(action.payload);
    case 'UNSET_USER':
      return unsetUser(state, action.payload);
    default:
      return state;
  }
}

function setUser(payload) {
  return {
    username: payload.user.username,
    id: payload.user.id
  };
}

function unsetUser() {
  return null
}