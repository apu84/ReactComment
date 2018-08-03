export default function (state = [], action) {
  switch (action.type) {
    case "GETALL_COMMENTS_SUCCESS":
      return [...action.payload.comments].reverse();
    default:
      return state;
  }
}