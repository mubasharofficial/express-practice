import express from 'express';
const app = express();
const port = process.env.PORT || '3000'
// Load Router Modules
app.delete('/student/delete/:id',(req,res)=>{
    console.log(req.params)
    res.send("Student have deleted now");
});


app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
});