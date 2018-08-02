export const userService = {
  login,
  register
};

const users = JSON.parse(localStorage.getItem('users')) || [];

function login(userName, password) {
  return new Promise((resolve, reject) => {
    let filteredUsers = users.filter(user => {
      return user.username === userName && user.password === password;
    });

    if (filteredUsers.length > 0) {
      resolve({
        username: filteredUsers[0].username,
        id: filteredUsers[0].id
      })
    }
    else {
      reject('User name or password is not correct');
    }

  });
}

function register(userName, password) {
  return new Promise((resolve, reject) => {
    let filteredUsers = users.filter(user => {
      return user.username === userName;
    });

    if (filteredUsers.length === 0) {
      const user = {
        id: Math.ceil(Math.random() * 10000),
        username: userName,
        password: password
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
