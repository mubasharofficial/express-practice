import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.set("strictQuery", false);
    try{
        const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
        const DB_OPTIONS ={
            dbName: process.env.DATABASE_NAME || 'school_testdb',  // on start if not exit than create this db
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log('connected successfully');
    }
    catch(err)
    {
        console.log(err)
    }
}

export default connectDB;