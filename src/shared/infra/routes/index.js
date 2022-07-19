const express = require('express')
const usersRoutes = require('./users.routes')
const squadsRoutes = require('./squads.routes')

const router = express.Router()

router.use('/users', usersRoutes)
router.use('/squads', squadsRoutes)

module.exports = router