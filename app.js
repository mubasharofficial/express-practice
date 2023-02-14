import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const port = process.env.PORT || '3000';

app.use(cookieParser())


app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})