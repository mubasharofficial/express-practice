import express from 'express';
import session from 'express-session'
import MongoStore from 'connect-mongo';
const app = express();
const port = process.env.PORT || '3000';

import web from './routes/web.js'
import connectDB from './db/connectdb.js';

/** mongodb connection enabled */
connectDB();

/** Session Storage start */
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
const DATABASE_NAME = process.env.DATABASE_NAME || "StudentSession";
const DATABASE_COLLECTION = process.env.DATABASE_COLLECTION || "session";
const SESSION_EXPIRY_DATE = process.env.DATABASE_EXPIRY_DATE || 14*24*60*60;

const sessionStorage = MongoStore.create({
    mongoUrl:DATABASE_URL,
    dbName:DATABASE_NAME,
    connectionName:DATABASE_COLLECTION,
    ttl:SESSION_EXPIRY_DATE,
    autoRemove:'native' /** auto removed session flag*/
});

/** start session with mongodb */

app.use(session({
    name:'sessionkey',
    secret:'slkfhskljeismdlfkjksdmfl23mf32ntjgsdf2sdf3',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:100000},
    store:sessionStorage

}));

app.use('/',web);

app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})