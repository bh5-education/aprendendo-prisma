import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de Elixer',
            duration: 200,
            description: 'Excelente curso de Elixer',
            teacher: {
                create: {
                    name: 'Rafa Camarda'
                }
            }
        }
    });

    console.log(result)
}

main();