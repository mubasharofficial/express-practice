import express from 'express';
import connectDB from './db/connectdb.js';
import './models/Student.js'
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

//  Database Connection mongoDb
connectDB(DATABASE_URL);

app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})