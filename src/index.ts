import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function createUser() {
  try {
    const user = await client.user.create({
      where: {
        id: 1
      },
      include:{
        todos: true
      }
    });
    console.log("User created:", user);
  } catch (err) {
    console.error("Error creating user:", err);
  } finally {
    await client.$disconnect();
  }
}

createUser();
