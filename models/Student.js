import mongoose from "mongoose";
// import { Schema } from "mongoose"

// defining Scheme

const studentSchema = new mongoose.Schema({
//  name:String,
//  age:Number,
//_id:Number, if we pass id than it will take  must be pass in document creation time
name:{type:String,required:true,trim:true},
age:{type:Number,required:true,min:18,max:50},
fees:{type: mongoose.Types.Decimal128, required:true,validate:v=> v >= 5500.50}, //validate:(v)=>{v>= 5500.50}
hobbies:{type:Array},
isactive:{type:Boolean},
comment:[{value: {type:String}, publish:{type:Date,default:Date.now}}],
join_us:{type:Date, default: Date.now},
})

// check type of data type of any field by path
//console.log(studentSchema.path('fees'));
// Compiling Schema  TESTING 

const studentModel  = mongoose.model('student',studentSchema);

    
// Create new Document
/*
const createDoc = async() => {
try{
        const studentDoc = new studentModel(
            {
            // _id:1231312, // if mention in schema creation
                name:"Ali",
                age:31,
                fees:6500.05,
                hobbies:['dancing','reading'],
                isactive:true,
                comment:[{value:'This is not good mongoose'}]
            }
        )
        //   Saving Document
        const result = await studentDoc.save();
        console.log(result);
    }catch(err)
    {
        console.log(err)
    }        
}
*/
const createDoc = async(student) => {
    try{
            const studentDoc = new studentModel(
                {
                // _id:1231312, // if mention in schema creation
                    name:student.name,
                    age:student.age,
                    fees:student.fee,
                    hobbies:student.hobbies,
                    isactive:student.isactive,
                    comment:student.comment
                }
            )
            //   Saving Document
            const result = await studentDoc.save();
            console.log(result);
        }catch(err)
        {
            console.log(err)
        }        
    }

    const createmanyDoc = async() => {
        try{
                const studentDoc0 = new studentModel(
                    {
                        name:"Shayan Ali",
                        age:30,
                        fees:6500.05,
                        hobbies:['dancing','reading'],
                        isactive:true,
                        comment:[{value:'This is good mongoose'}]
                    }
                );
                const studentDoc1 = new studentModel(
                    {
                        name:"Faisal",
                        age:32,
                        fees:6500.05,
                        hobbies:['footbal','cricket'],
                        isactive:true,
                        comment:[{value:'Avarage Student'}]
                    }
                );

                const studentDoc2 = new studentModel(
                    {
                        name:"Mohsan Ali",
                        age:21,
                        fees:6540.05,
                        hobbies:['social Media','Action'],
                        isactive:true,
                        comment:[{value:'Be Preak Value'}]
                    }
                );
                const studentDoc3 = new studentModel(
                    {
                        name:"Hussain",
                        age:36,
                        fees:7500.05,
                        hobbies:['gardening','Radio Listing'],
                        isactive:true,
                        comment:[{value:'He is good Developer'}]
                    }
                );
                //   Saving Document
                const result = await studentModel.insertMany([studentDoc0,studentDoc1,studentDoc2,studentDoc3]);
                console.log(result);

            }catch(err)
            {
                console.log(err)
            }        
        }
export default createmanyDoc;