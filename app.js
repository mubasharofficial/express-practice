import express from 'express';
import { join } from 'path';
const app  = express();
import web from './routes/web.js';
const port = process.env.Port || 3000

/** static file loader  please load it before loading routes */

const options = {
    dotfiles:"allow",  /**  ignore / allow / deny 'this will allow to load but not proccedd' */
    extension:['html','htm'],
    index: false,
    maxAge:'1d',
    setHeaders:function (res,path,stat){
        res.set('x-timestamp',Date.now())
    }
}

/** static file loader */
// app.use(express.static("public"));  /**  this mathod will load folder static but not working */
// app.use(express.static(join(process.cwd(),"public")))  /** loading static file with   absoult page */
// app.use('/static',express.static(join(process.cwd(),"public")))  /** create virtual page */
//app.use('/css', express.static(join(process.cwd(),"public/css")))  /** This will used only for spafic folder path just css virtual path & absult ending path sould be same  */
app.use(express.static(join(process.cwd(),"public"),options))

app.use('/',web);

app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})