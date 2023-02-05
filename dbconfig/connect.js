import mongoose from "mongoose";
const PORT_NUMBER = process.env.DB_PORT || 2017
const DATABASE_NAME = process.env.DB_DATABASE || 'school'
const LOCAL_HOST = process.env.DB_HOST || '127.0.0.1'
// const conn = ()=>{
//     mongoose.set("strictQuery", false);
//     // await mongoose.connect(`mongodb://${LOCAL_HOST}:${PORT_NUMBER}/${DATABASE_NAME}`)
//     return  mongoose.connect(`mongodb://127.0.0.1:27017/school`)
//     .then((conn)=>{
//         console.log("Connect To MongoDb Server successfully");
        
//     })
//     .catch(
//         (err)=>{
//             console.log(`could not connected to MongoDb: ${err}`);
           
//         }
//     )

// }

const conn = async(DATABASE_URL)=>{
    mongoose.set("strictQuery", false);
    try{
        // await mongoose.connect(`mongodb://${LOCAL_HOST}:${PORT_NUMBER}/${DATABASE_NAME}`)
        // return  mongoose.connect("mongodb://root:toor@127.0.0.1:27017/school?authSource=school")
      const  DB_OPTIONS = {
            user: process.env.DB_DATABASE || 'root',
            pass: process.env.DB_PASSWORD || 'toor' ,
            dbname: process.env.DB_DATABASE || 'school',
            authSource:process.env.DB_AUTH_SOURCE || 'school'
        }
    await mongoose.connect(DATABASE_URL,DB_OPTIONS)
    console.log("Success fully connect")
    }
    catch(err)
    {
      console.log(`could not connect due To: ${err}`)
    }
  
    

}

export default conn;