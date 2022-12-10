// import path from "path";
// const join = path.join();
import { join } from "path";
const homeController = (req,res)=>{
   // res.send("Hello Word Pakistan")
   //res.sendFile('E:\\Express\\express-practice-7-router-in-express\\views\\home.html')
    res.sendFile(join(process.cwd(),'views','home.html'));
}

export {homeController};