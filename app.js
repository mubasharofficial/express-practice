import express from 'express';
import session from 'express-session'
const app = express();
const port = process.env.PORT || '3000';
import web from './routes/web.js'

app.use(session({
    name:'sessionkey',
    secret:'slkfhskljeismdlfkjksdmfl23mf32ntjgsdf2sdf3',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:20000}

}))
app.use('/',web)


app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})