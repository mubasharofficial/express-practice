import express from 'express';
// import mongoose from 'mongoose';
import conn from './dbconfig/connect.js';
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/school"

// mongoose.set("strictQuery", false);
// mongoose.connect('mongodb://127.0.0.1:27017/school')
// .then(()=>{
//     console.log('mongo connected successfully')
// })
/** to create mongodb user */
//db.createUser({user:'root',pwd:'toor',roles:[{role:'read',db:'school'}]})

(()=>{
    const connection = conn();
})()
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})