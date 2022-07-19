const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
    log: ['query', 'error']
})

module.exports = prisma