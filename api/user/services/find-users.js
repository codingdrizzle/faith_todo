const User = require("../schema");

const findUsers = () => {
    return User.find()
}

module.exports = findUsers;