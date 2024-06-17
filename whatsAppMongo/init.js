const mongoose=require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(()=>{
    console.log("connection success");
}).catch((err)=>{
    console.log(err);
});
//require chat model from chats.js
const Chat=require("./models/chats.js");

let allChats=[
    {
        from:"shubham ranjane",
        to:"bhumika gawade",
        msg:"Do you still likes me?",
        created_at:new Date(),
    },
    {
        from:"pavan  ranjane",
        to:"shubham ranjane gawade",
        msg:"Where are you",
        created_at:new Date(),
    },
    {
        from:"omkar  daswadkar",
        to:"shubham ranjane",
        msg:"Upload the code on github till 12pm",
        created_at:new Date(),
    }
]

Chat.insertMany(allChats)

