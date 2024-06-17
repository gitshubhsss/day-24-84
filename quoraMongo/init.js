const mongoose=require("mongoose");
const Post=require("./models/posts.js");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/quora");
}

main().then(()=>{
    console.log("connection success");
}).catch(()=>{
    console.log("connection error");
});

let posts=[
    {
        username:"shubham ranjane",
        content:"I have read Ikigai",
        date:new Date(),
    },
    {
        username:"omkar daswadkar",
        content:"I love coding",
        date:new Date(),
    },
    {
        username:"Shreya rane",
        content:"I love my dad",
        date:new Date(),
    }
];

Post.insertMany(posts);