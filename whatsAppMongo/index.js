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
    console.log(`App is listning on the port 8080`);
});

const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(()=>{
    console.log("connection success");
}).catch(()=>{
    console.log("error",err);
});

app.get("/",(req,res)=>{
    res.send("connecting express with mongodb");
})

//requre teh chat.js 

const Chat=require("./models/chats.js");

//home route

app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats})
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save().then(()=>{
        console.log("chat was saved");
    }).catch(()=>{
        console.log("error in saving chats");
    });
    res.redirect("/chats");
})

