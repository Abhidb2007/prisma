import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function createUser() {
  try {
    const user = await client.user.create({
      data: {
        name: "abhu",
        password: "abhu123",
        age: 21,
        city: "delhi",
      },
    });
    console.log("User created:", user);
  } catch (err) {
    console.error("Error creating user:", err);
  } finally {
    await client.$disconnect();
  }
}

createUser();
