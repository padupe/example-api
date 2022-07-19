const prisma = require('./prismaClient.js')

// Função para limpar o Banco de Dados
async function clearDB() {
    // TODO
    await prisma.squads({ where: {} })
    await prisma.users({ where: {} })
}

// Função para pouplar o Banco de Dados
async function populateDB() {
    // TODO
    await prisma.squads.create({
        data: {
        }
    })
    
    await prisma.users.createMany({
        data: [
            { }
        ]
    })
}

async function main() {
    await populateDB()
}

if (process.env.NODE_ENV !== 'test') {
    main()
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
}

module.exports = {
    clearDB,
    populateDB
}