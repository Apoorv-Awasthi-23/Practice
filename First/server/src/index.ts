import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

app.get("/", (req, res) => {
    res.send("Home Page");
})