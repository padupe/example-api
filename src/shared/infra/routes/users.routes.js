const express = require('express')
const UsersController = require('../../../modules/users/usersController')
const usersRoutes = express.Router()

const userController = new UsersController()
/*
    TODO - Implementar rotas dos métodos POST, GET, PUT, DELETE

*/

module.exports = usersRoutes