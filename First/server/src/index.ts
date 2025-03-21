import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";


const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const data = await prisma.user.findFirst({
    where: {
      id: parseInt(id),
    },
    select: {
      username: true,
      firstName: true,
      lastName: true,
    },
  });

  res.json(data);
});

app.post("/api", async (req, res) => {
  const data = req.body;
  await prisma.user.create({
    data: {
      username: "Apoorv24",
      password: "12345",
      firstName: "Apoorv",
      lastName: "Awasthi",
    },
  });
});
