import { PrismaClient } from '@prisma/client'

// Create a singleton Prisma client for Node/Next dev environment
const globalForPrisma = globalThis

const prisma = globalForPrisma.__prisma || new PrismaClient()
if (!globalForPrisma.__prisma) globalForPrisma.__prisma = prisma

export default prisma
