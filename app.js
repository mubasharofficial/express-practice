import express from 'express';
// import mongoose from 'mongoose';
import conn from './dbconfig/connect.js';
const app = express();
const port = process.env.PORT || 3000;
// const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://root:toor@127.0.0.1:27017/school?authSource=school';
const DATABASE_URL = process.env.DB_HOST +':'+ process.env.PORT  || 'mongodb://127.0.0.1:27017';

// mongoose.set("strictQuery", false);
// mongoose.connect(DATABASE_URL)
// .then(()=>{
//     console.log('mongo connected successfully')
// })
/** to create mongodb user */
//db.createUser({user:'root',pwd:'toor',roles:[{role:'read',db:'school'}]})

(()=>{
    const connection = conn(DATABASE_URL);
})()
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})