import {userService} from './users'

export const commentService = {
  saveComment,
  getAllComments,
  removeComment
};
const comments = JSON.parse(localStorage.getItem('comments')) || [];

function saveComment(user, commentText, index) {
  return new Promise((resolve, reject) => {
    const comment = {
      text: commentText || '',
      user: {
        id: user.id
      },
      timestamp: new Date()
    };
    if (typeof index !== "undefined") {
      comments[index] = comment;
    }
    else {
      comments.push(comment);
    }
    localStorage.setItem('comments', JSON.stringify(comments));
    getAllComments().then((fetchedComment) => {
      resolve(fetchedComment);
    })
  });
}

function getAllComments() {
  return new Promise((resolve, reject) => {
     comments.map((comment) => {
      userService.getUser(comment.user.id).then((user) => {
        comment.user = user;
      });
    });
    resolve(comments);
  });
}

function removeComment(user, index) {
  return new Promise((resolve, reject) => {
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    getAllComments().then((fetchedComment) => {
      resolve(fetchedComment);
    })
  });
}