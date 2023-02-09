import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) =>{
    mongoose.set('strictQuery', true);
    try{
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