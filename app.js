import express from 'express';
import router from './routes/student.js'
const app = express();
const port = process.env.PORT || '3000'
// Load Router Modules
app.use('/student/',router)
app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
});