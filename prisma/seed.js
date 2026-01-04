const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()

async function main() {
  // Helpful check: if the generated Prisma client doesn't include the new `User` model
  // inform the developer to run migrations + generate the client.
  if (typeof prisma.user === 'undefined') {
    console.error('\nPrisma Client does not include `user` model.\nRun the following locally to generate the client and apply the migration:\n\n  npx prisma migrate dev --name add-user-and-role\n  npm run prisma:generate\n  npm run prisma:seed\n')
    process.exit(1)
  }

  await prisma.task.createMany({
    data: [
      {
        title: 'Daily check-in',
        description: 'Record minutes + energy + stress to calculate capacity',
        nextAction: 'Open Flowstate and complete the daily check-in',
        estimateMin: 5,
        energyCost: 1,
      },
      {
        title: 'Start focus block for a task',
        description: 'Begin a timed focus session tied to a task and record real time',
        nextAction: 'Select a task and start the timer',
        estimateMin: 60,
        energyCost: 2,
      }
    ],
  })

  // Upsert staff users
  const staff = [
    { email: 'rob@launchpadphilly.org', password: 'lpuser1', role: 'INSTRUCTOR' },
    { email: 'sanaa@launchpadphilly.org', password: 'lpuser2', role: 'COACH' },
    { email: 'taheera@launchpadphilly.org', password: 'lpuser3', role: 'COACH' },
  ]

  for (const s of staff) {
    const hash = await bcrypt.hash(s.password, 10)
    await prisma.user.upsert({
      where: { email: s.email },
      update: { passwordHash: hash, role: s.role },
      create: { email: s.email, passwordHash: hash, role: s.role },
    })
  }
}

main()
  .then(() => {
    console.log('Seed finished')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
