const { createUser } = require("../services")

const addUser = async (req, res) => {
    const { username, password, email } = req.body
    try {
        const newUser = await createUser({ username, password, email })
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status().json(error)
    }
}

module.exports = addUser;