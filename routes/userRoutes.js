const express = require("express");
const { users } = require("../config/db.js");
const { v4: uuidv4 } = require("uuid");

const userRoutes = express.Router();

// Task Get All Users.- 2 Points
userRoutes.get("/allUsers", (req, res) => {
  const allUsers = [];
  users.map((item) => {
    allUsers.push(item.username);
  });
  res.send(allUsers);
});

// Task 7: Login as a Registered user - 3 Points
userRoutes.post("/login", (req, res) => {
  const { username, password } = req.body;

  const foundUser = users.find(
    (item) => item.username == username && item.password == password
  );
  if (foundUser) {
    res.send({ status: "success", message: "User Logged In Successfully" });
  } else {
    res.send({ status: "error", message: "Invalid Credentials" });
  }
});

// Task 6: Register New user – 3 Points
userRoutes.post("/register", (req, res) => {
  const { username, password, admin } = req.body;
  const id = uuidv4();
  const newUser = { id, username, password, admin: admin || false };
  const allUsers = [];
  users.map((item) => {
    allUsers.push(item.username);
  });
  if (username in allUsers) {
    res.send({ status: "error", message: "User Already Exists" });
  } else {
    users.push(newUser);
    res.send({ status: "success", message: "User Registered Successfully" });
  }
});

module.exports = userRoutes;
