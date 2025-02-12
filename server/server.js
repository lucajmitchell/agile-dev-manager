import express from "express";
import prisma from "./prisma.js";

const app = express();

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
