const User = require("../schema");

const createUser = (data) => {
    return User.create(data)
}

module.exports = createUser