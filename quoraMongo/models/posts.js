const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    username:{
        type:String,
        maxLength:50,
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true
    }
});

//define the schema 

const Post=mongoose.model("Post",postSchema);

module.exports=Post;