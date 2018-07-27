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
  if(payload.users) {
   for(let i=0; i < payload.users.length; i++) {
     if (payload.name === payload.users[i].name
         && payload.password === payload.users[i].password) {
       return {
         name: payload.users[i].name,
         password: payload.users[i].password
       }
     }
   }
  }
  return {};
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