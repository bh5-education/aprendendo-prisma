import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso Discover',
            duration: 300,
            description: 'Iniciando na programação',
            fk_id_teacher: 'f655dcc4-7278-4b0f-ad44-17e052e7fa61'
        }
    });

    console.log(result)
}

main();