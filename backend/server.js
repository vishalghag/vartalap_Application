const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

// it is called has instance
const app = express();
dotenv.config;
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is Running Successful");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChatId = chats.find((chat) => chat._id === req.params.id);
  return res.send(singleChatId);
});

app.listen(`${port}`, console.log(`server is running on port ${port}`));
