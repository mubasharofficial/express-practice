import express from 'express';
import connectDB from './db/connectdb.js';
import createmanyDoc from './models/Student.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

//  Database Connection mongoDb

connectDB(DATABASE_URL);

// Create & Save Document

// createDoc();
const studentobj ={
    name:'Ali',
    age:32,
    fee:8745.0,
    hobbies:['footbal','internet browser'],
    isactive:true,
    comment:[{value:'he is Good gay.'}]
};
// createDoc(studentobj);

// Create many documents
createmanyDoc();

app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})