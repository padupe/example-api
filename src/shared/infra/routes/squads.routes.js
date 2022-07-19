const express = require('express')
const SquadController = require('../../../modules/squads/squadsController')
const squadsRoutes = express.Router()

const squadsController = new SquadController()
/*
    TODO - Implementar rotas dos métodos POST, GET, PUT, DELETE

*/

module.exports = squadsRoutes