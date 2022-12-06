import express from 'express';
const app = express();
const port = process.env.PORT || '3000'
// Load Router Modules
app.get('student/all',(req,res)=>{
res.send("welcome to all student page");
console.table({'a':123})
});

app.get('student/:id([0-9]{2})',(req,res)=>{

    if(req.params.id ==1)
        {
            res.send("Delete Record success....");
        }
        else
        {
            res.send("Delete from working from this student");
        }
    });


app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
});