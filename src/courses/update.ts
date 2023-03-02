import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "59c80140-e9b9-4c46-a276-2eaa17057497",
        },
        data: {
            duration: 350,
            name: 'Curso ReactJS - Diego Fernandes'
        }
    });

    console.log(result);
}

main();