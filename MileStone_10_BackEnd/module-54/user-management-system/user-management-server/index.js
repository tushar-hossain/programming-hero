const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const userData = [
  {
    id: 1,
    name: "sabana",
    email: "sabana@gmail.com",
  },
  {
    id: 2,
    name: "sabnur",
    email: "sabnur@gmail.com",
  },
  {
    id: 3,
    name: "suchoruta",
    email: "suchorita@gmail.com",
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

app.get("/users", (req, res) => {
  res.send(userData);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = userData.length + 1;
  userData.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
