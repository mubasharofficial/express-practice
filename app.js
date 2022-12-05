import express from 'express';
const app = express();
const port = process.env.PORT || '3000'
// Load Router Modules
app.delete('/student/delete/:id',(req,res)=>{
    console.log(req.params)
    res.send("Student have deleted now");
});
app.get('/product/:category/:id',(req,res)=>{
    const {category,id} = req.params // destructured 
    console.log(`Product category ${category} and product id${id}`)
    res.send("Product was deleted .....");
});
app.get('/product/order/:year/and/:month',(req,res)=>{
    console.log(req.params)
    res.send(req.params)
});
app.get('/train/:from-:to',(req,res)=>{
    console.log(req.params)
    res.send(req.params)
});
app.get('/location/:state.:to',(req,res)=>{
    console.log(req.params);
    res.send(req.params);
});
app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
});