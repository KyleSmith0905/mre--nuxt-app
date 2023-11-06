import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async () => {
	const prisma = new PrismaClient()

  console.log('Started query to find user');
	const user = await prisma.user.findFirst({where: {email: 'not-an-example@example.com'}})
  console.log('Finished query to find user');

  return {
    user
  }
})