import express from 'express';
import {join} from 'path';
const app = express();
const port = process.env.PORT || 3000;

import web from "./routers/web.js";

/** Setup the Dictory where is template file are located */

// app.set('views','./views'); /** your pull all file in views folder than that is not need  it will take automatically */

/** select which tempplate engine we should have been used */
app.use(express.static(join(process.cwd(),"public")))
app.set('view engine','ejs');




app.use('/',web);



app.listen(port,()=>{
    console.log(`Server is Listing at http://localhost:${port}`);
})