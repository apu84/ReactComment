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
