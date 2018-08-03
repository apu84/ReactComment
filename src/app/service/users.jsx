export const userService = {
  login,
  register,
  getUser,
  getLoggedInUser,
  logout
};

const users = JSON.parse(localStorage.getItem('users')) || [];
const user = JSON.parse(localStorage.getItem('user')) || null;

function login(userName, password) {
  return new Promise((resolve, reject) => {
    let filteredUsers = users.filter(user => {
      return user.username === userName && atob(user.password) === password;
    });

    if (filteredUsers.length > 0) {
      const user = {
        id: filteredUsers[0].id,
        username: filteredUsers[0].username,
        firstName: filteredUsers[0].firstName,
        lastName: filteredUsers[0].lastName
      };
      localStorage.setItem('user', JSON.stringify(user));
      resolve(user);
    }
    else {
      reject('User name or password is not correct');
    }
  });
}

function logout(userName) {
  return new Promise((resolve, reject) => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser && JSON.parse(loggedInUser).username === userName) {
      localStorage.removeItem('user');
      resolve(null);
    }
    else {
      reject('No logged in user named ' + userName + ' found');
    }
  })
}

function register(firstName, lastName, userName, password) {
  return new Promise((resolve, reject) => {
    let filteredUsers = users.filter(user => {
      return user.username === userName;
    });

    if (filteredUsers.length === 0) {
      const user = {
        id: Math.ceil(Math.random() * 10000),
        firstName: firstName,
        lastName: lastName,
        username: userName,
        password: btoa(password)
      };
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      resolve({id: user.id, username: user.username});
    }
    else {
      reject('User with name "' + userName + '" already exists');
    }
  });
}

function getUser(userId) {
  return new Promise((resolve, reject) => {
    let filteredUsers = users.filter(user => {
      return user.id === userId;
    });

    if (filteredUsers.length > 0) {
      resolve({
        firstName: filteredUsers[0].firstName,
        lastName: filteredUsers[0].lastName,
        username: filteredUsers[0].username,
        id: filteredUsers[0].id
      });
    }
    else {
      reject('User with id "' + userId + '" doesn\'t exists');
    }
  });
}

function getLoggedInUser() {
  return new Promise((resolve, reject) => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      resolve(JSON.parse(loggedInUser));
    }
    else {
      reject('No logged in user found');
    }
  });
}
