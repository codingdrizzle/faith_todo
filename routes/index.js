const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
//const todoRoutes = require('./todosRoutes')


userRoutes(router)
//todoRoutes(router)

module.exports = router;