import express from 'express';
import {join} from 'path';
import { myLogger } from './middleware/logger-middleware.js';
const app = express();
const port = process.env.PORT || 3000;

import web from "./routers/web.js";
import  router  from './routers/student.js';

/** Setup the Dictory where is template file are located */

// app.set('views','./views'); /** your pull all file in views folder than that is not need  it will take automatically */

/** select which tempplate engine we should have been used */
app.use(express.static(join(process.cwd(),"public")))
app.set('view engine','ejs');

/** this middleware is called at application level This will run on all routes */
    //app.use(myLogger);
/**  this middleware called on application path level
  this will run on all routes which start from /aboute */
    //app.use('/about',myLogger);

app.use('/',web);
app.use('/',router);



app.listen(port,()=>{
    console.log(`Server is Listing at http://localhost:${port}`);
})