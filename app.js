import express from 'express';
const app = express();
const port = process.env.PORT || '3000'
import router from './routes/web.js';
app.use('/',router);

app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})