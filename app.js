import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const port = process.env.PORT || '3000';
import web from './routes/web.js'

app.use(cookieParser())

app.use('/',web)


app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})