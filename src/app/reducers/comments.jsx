export default function (state = [], action) {
  switch (action.type) {
    case "GETALL_COMMENTS_SUCCESS":
      return [...action.payload.comments];
    case "REMOVE_COMMENT":
      return removeComment(state, action.payload.index);
    case "ADD_COMMENT":
      return addComment(state);
    default:
      return state;
  }
}

function editComment(state, text, index) {
  const mutable = [...state];
  mutable[index].text = text;
  return mutable;
}

function removeComment(state, index) {
  const mutable = [...state];
  mutable.splice(index, 1);
  return mutable;
}

function addComment(state) {
  return  [...state, {
    text: '',
    userId: 1
  }];
}