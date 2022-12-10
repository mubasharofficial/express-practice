import express from 'express';
const app  = express();
import router from './routes/web.js';
const port = process.env.Port || 3000




app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})