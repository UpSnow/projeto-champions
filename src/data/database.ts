import { PrismaClient} from '@prisma/client';

export const prisma = new PrismaClient({});


async function main() {
    const users = await prisma.user.findMany();
    console.log(users);
}
export default main;   
