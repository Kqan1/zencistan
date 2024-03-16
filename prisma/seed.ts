import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function seed() {
    const password = await hash("test", 12);
    const userUSER = await prisma.user.upsert({
        where: { email: "test@user.com" },
        update: {},
        create: {
            email: "test@user.com",
            name: "user",
            surname: "user",
            password,
            // pp: "/pp.svg",
            banner: "banner user",
            role: "USER",
            phoneNumber: 0
        },
    });
    const UserADMIN = await prisma.user.upsert({
        where: { email: "test@admin.com" },
        update: {},
        create: {
            email: "test@admin.com",
            emailVerified: new Date(),
            name: "admin",
            surname: "admin",
            password,
            // pp: "/hamza.jpg",
            banner: "banner admin",
            role: "ADMIN",
            phoneNumber: 0,
            phoneNumberVerified: new Date()
        },
    });
    console.log("USER"+ { userUSER }, "ADMİN"+ { UserADMIN });
}
seed()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });