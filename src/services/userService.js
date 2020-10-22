const users = [];

const findAll = () => {
  return users;
};

const save = (user) => {
  if (validateUser(user)) {
    users.push(user);
    return user;
  }
};

const validateUser = (user) => (!user.name || !user.password ? false : true);

module.exports = { findAll, save };
