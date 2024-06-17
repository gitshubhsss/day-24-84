//require mongoose packge
const mongoose=require("mongoose");

async function main(){
    //establish the connection beetween mongodb and nodejs
    await mongoose.connect("mongodb://127.0.0.1:27017/employee");
}

main().then(()=>{
    console.log("success connection");
}).catch((err)=>{
    console.log("failure connection");
});

//define the scema

const Employee=require("./models/employee.js");

const emp1=new Employee({
    name:"pavan ranjane",
    email:"pavanranjane@gmail.com",
    sallary:500000,
    deg:"CA "
});

emp1.save().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("error occured",err);
})