const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        maxLength:30
    },
    sallary:{
        type:Number,
        min:50000,
    },
    deg:{
        type:String
    }
});


const Employee=new mongoose.model("Employee",employeeSchema);

module.exports=Employee;