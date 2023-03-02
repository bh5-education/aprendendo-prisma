import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de React Native',
            duration: 300,
            description: 'Excelente curso de React Native',
            teacher: {
                connect: {
                    id: '2c7c8c83-ad06-4999-9777-653f51534b5a'
                }
            }
        }
    });

    console.log(result)
}

main();