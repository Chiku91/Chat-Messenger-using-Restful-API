const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "neha",
        to: "preeti",
        message: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        message: "teach me js callbacks",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        message: "all the best!",
        created_at: new Date(),
    },
    {
        from: "anita",
        to: "ramesh",
        message: "bring me some fruits",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "peter",
        message: "love you brother",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);