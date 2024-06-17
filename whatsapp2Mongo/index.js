//setup for express
const express=require("express");
const app=express();
const port=8080;

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`app is listening on the port ${8080}`);
});

//set up for mongoose
const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/betawhatsapp");
}

main().then(()=>{
    console.log("connection success");
}).catch((err)=>{
    console.log("connection error");
});

const Chat = require("./models/chats.js");

app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats});
});

//creatig new chat

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
});

app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;

    let newChat=new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date(),
    });

    newChat.save().then(()=>{
        console.log("data saved succssfully");
    }).catch(()=>{
        console.log("error");
    });
    res.redirect("/chats");
});


//Update the post

app.get("/chats/:_id/edit",async(req,res)=>{
    let {_id}=req.params;
    let chat=await Chat.findById(_id);
    res.render("edit.ejs",{chat});
});

app.put("/edit/:_id",async(req,res)=>{
    let {_id}=req.params;
    let {msg:newMsg}=req.body;
    console.log(msg);
    console.log(_id);
    let upadatedChat= await Chat.findByIdAndUpdate(_id,{msg:newMsg},{new:true,runValidators:true});
    console.log(upadatedChat);
    res.redirect("/chats");
})