//express setup
const express=require("express");
const app=express();
const port=8080;

const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`);
});

//mongodb setup

const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/quora");
}

main().then(()=>{
    console.log("connection success");
}).catch(()=>{
    console.log("connection error");
});

const Post=require("./models/posts.js");
const { log } = require("console");

app.get("/posts",async (req,res)=>{
   let posts= await Post.find()
    res.render("index.ejs",{posts})
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;

    let newPost= new Post({
        username:username,
        content:content,
        date:new Date()
    });

    newPost.save().then(()=>{
        console.log("data saved succesfully");
    }).catch(()=>{
        console.log("error to save the data");
    });

    res.redirect("/posts");
})