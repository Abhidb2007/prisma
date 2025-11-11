import express from "express";
import { PrismaClient } from "@prisma/client";
const app=express();
const client = new PrismaClient();

app.get("/users",async(req,res)=>{
  const users=await client.users.findMany();
  res.json(users)({
     users
  })
})
app.get("/todos/:id",async(req,res)=>{
  const{id}=req.params.id as unknown as number;
  const users=await client.users.findfirst({
    where:{
      id:id
    }
    select:{
      todos:true
    }
  });
  res.json(users)({
     users
  })  
})
app.listen(3000,()=>{
  console.log("Server is running on port 3000");
});

  
 
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
