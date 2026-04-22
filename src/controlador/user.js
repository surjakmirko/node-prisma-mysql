const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function findAll(req,res) {
    const usuarios = await prisma.user
    return res.status(200).json(usuarios)
    
}

export default findAll