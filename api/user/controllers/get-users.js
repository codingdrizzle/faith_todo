const {findUsers} = require("../services")

const getUsers = async (req, res) => {
    try {
        const users = await findUsers()
        return res.status(200).json(users) 
    } catch (error) {
        return res.status().json(error)
    }
}

module.exports = getUsers;