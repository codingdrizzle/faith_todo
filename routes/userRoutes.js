const {addUser, getUsers} = require("../api/user/controllers")

module.exports = (router) => {
    router.post('/new-user', addUser)
    router.get('/users', getUsers)
}