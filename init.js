const mongoose = require('mongoose');
const Chat = require('./models/chat');
main().then(() => {
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheet",
    created_at: new Date(),
    },  
    {
    from: "rohit",
    to: "jay",
    msg: "teach me js callbacks",
    created_at: new Date(),
    }, 
    {
    from: "ramesh",
    to: "suresh",        
    msg: "all the best!",
    created_at: new Date(),
    }, 
    {
    from: "amruta",
    to: "anjali",
    msg: "how your picknic goes?",
    created_at: new Date(),
    },  
];

Chat.insertMany(allchats);
