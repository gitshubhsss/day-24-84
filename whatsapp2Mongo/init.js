//in this file we are going to initilize the database
//means we are going to insert the value inside the database

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/betawhatsapp");
}

main()
  .then(() => {
    console.log("connection success");
  })
  .catch(() => {
    console.log("connection error");
  });

const Chat = require("./models/chats.js");

let allChats = [
  {
    from: "shubham ranjane",
    to: "mansi singh",
    msg: "i love to talk with you in english",
    created_at: new Date(),
  },
  {
    from: "mansi singh",
    to: "shubham ranjane",
    msg: "i too",
    created_at: new Date(),
  },
  {
    from: "omkar daswadkar",
    to: "shubham ranjane",
    msg: "what you have studied today?",
    created_at: new Date(),
  },
  {
    from: "shubham ranjane",
    to: "omkar omkar daswadkar",
    msg: "i have studied mongoose with express",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);