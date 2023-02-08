import express from 'express';
const app = express();
const port = process.env.PORT || '300'


app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})