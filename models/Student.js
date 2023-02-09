import mongoose from "mongoose";
// import { Schema } from "mongoose"

// defining Scheme

const studentSchema = new mongoose.Schema({
//  name:String,
//  age:Number,
name:{type:String,required:true,trim:true},
age:{type:Number,required:true,min:18,max:50},
fees:{type: mongoose.Types.Decimal128, required:true,validate:v=> v >= 5500.50}, //validate:(v)=>{v>= 5500.50}
hobbies:{type:Array},
isactive:{type:Boolean},
comment:[{value: {type:String},publish:{type:Date,default:Date.now}}],
join_us:{type:Date, default: Date.now},
})

// check type of data type of any field by path
//console.log(studentSchema.path('fees'));

// Compiling Schema

const studentModel  = mongoose.model('student',studentSchema);