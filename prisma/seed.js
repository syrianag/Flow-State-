const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
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
