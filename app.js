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


// Route with ristrict with regulare expression

app.delete('/student/single/delete/:id([0-9]{2})',(req,res)=>{
    console.log(req.params)
    res.send("Student have deleted now");
});


app.get('/:type(article|post)/:id',(req,res)=>{
    console.log(req.params)
    res.send("Student have deleted now");
});

//app.params
app.param('id',(req,res,next,id)=>{
    console.table({"call only one time":id});
    next();
})
app.get('/user/:id',(req,res,next)=>{
    console.log("first run");
    console.log(req.params)
    next();
});

app.get('/user/:id',(req,res)=>{
    console.log("first run");
    console.log(req.params)
    res.send(req.params);
});


//app.params -- Array of route params
app.param(['id','page'],(req,res,next,value)=>{
    // it will run two time first when it recieved id & second for page 
    console.table({"call only one time":value});
    next();
});

app.get('/blog/:id/:page',(req,res)=>{
    console.log("second  run");
    console.log(req.params)
    res.send(req.params);
    next();
});

app.get('/blog/:id/:page',(req,res)=>{
    console.log("second  run");
    console.log(req.params)
    res.send(req.params);
    next();
});

// query string 

app.get('/blog',(req,res)=>{
    console.log("Query String");
    console.table(req.query)
    res.send(req.query);
});



app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
});