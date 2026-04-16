import { prisma } from "../db/index.js";

async function findAll(req,res) {
    const usuarios = await prisma.user.findMany()
    return res.status(200).json(usuarios)
    
}

export default findAll