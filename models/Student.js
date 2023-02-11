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
// Compiling Schema 

const studentModel  = mongoose.model('student',studentSchema);

// Retrieve All Document

const getAllDoc = async()=>
{
/** INCLUDE METHOD */

/** include method select provide attribute */
//  const result =  await studentModel.find().select('name age') // include,  select function will fetch just select attirubet
//  const result =  await studentModel.find().select(['name', 'age']) // include, select function will fetch just select attirubet
//  const result =  await studentModel.find().select({name:1, age:1}) // include, 1 mean select that. select function will fetch just select attirubet

/** EXCLUDE METHOD */
/**  select except provided method */
//  const result =  await studentModel.find().select('-name -age') // exclude,  select except function will fetch just select attirubet
//  const result =  await studentModel.find().select(['-name', '-age']) // exclude, select  except function will fetch just select attirubet
//  const result =  await studentModel.find().select({name:0, age:0}) // exclude, 0 mean except this select except function will fetch just select attirubet

/** PROJECTION METHOD */
const result =  await studentModel.find({},'name age') // projection,  select  function will fetch just select attirubet

 console.log(result)

 //  result.forEach(
//     (item) =>{
//         console.log(
//             item.name,
//             item.age,
//             item.fees.toString(),
//             item.hobbies[0],
//             item.hobbies[1],
//             item.isactive,
//             item.comment[0].value,
//             item.comment[0].publish ,
//             item.join_us  

//             )
//     }
//  )
}

const getSingleDoc = async () =>{
    const result = await studentModel.findById("63e53f22ac002be7a3f4321e");
    console.log(result);
    // console.log(result._id.getTimestamp(),result.name,result.age,result.fees.toString());

}

// Retrieve document with  specific fields
const getSingleDocSpecificField = async () =>{
    const result = await studentModel.findById("63e53f22ac002be7a3f4321e",'name age');
    console.log(result);
    // console.log(result._id.getTimestamp(),result.name,result.age,result.fees.toString());

}

// Retrieve document with  specific fields
const getDocByFieldName = async () =>
{
    const result = await studentModel.find({name: 'Mubashar'});
    console.log(result);
    // console.log(result._id.getTimestamp(),result.name,result.age,result.fees.toString());
}

// Retrieve document with  specific fields by fieldName
const getDocByFieldNameSpefic_fields = async () =>
{
    const result = await studentModel.find({name: 'Mubashar'}).select('name age');
    console.log(result);
    // console.log(result._id.getTimestamp(),result.name,result.age,result.fees.toString());
}

const getLimitedDoc = async () =>
{
    // const result = await studentModel.find().limit(2);
    const result = await studentModel.find({},null,{limit: 1});
    console.log(result);
    // console.log(result._id.getTimestamp(),result.name,result.age,result.fees.toString());
}

const getSkippdDoc = async () =>
{
    // const result = await studentModel.find().limit(2);
    // const result = await studentModel.find().skip(1);
    const result = await studentModel.find({},null,{skip:2});

    console.log(result);
    // console.log(result._id.getTimestamp(),result.name,result.age,result.fees.toString());
}
const getCountdDoc = async () =>
{

    const result = await studentModel.find().countDocuments();

    console.log(result);
    // console.log(result._id.getTimestamp(),result.name,result.age,result.fees.toString());
}

const getSortDoc = async () =>
{

    // const result = await studentModel.find().sort({age:1}); /** assinding order */
    const result = await studentModel.find().sort({age:-1}); /** desciding order */

    console.log(result);
    // console.log(result._id.getTimestamp(),result.name,result.age,result.fees.toString());  // print all docs except one 
}
export { getAllDoc,getSingleDoc,
    getSortDoc,
    getSingleDocSpecificField,
    getCountdDoc,
    getDocByFieldName,
    getDocByFieldNameSpefic_fields,
    getLimitedDoc,getSkippdDoc }