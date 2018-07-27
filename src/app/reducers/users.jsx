export default function (state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return addUser(state, action.payload);
    default:
      return state;
  }
}

function addUser(state, payload) {
  return [...state, {
    name: payload.name,
    password: payload.password,
    id: Date.now()
  }]
}