import {join} from "path";
const homeController = (req,res)=>{
    const params = {id:"101",name:"Pakistan Lahore"}
    res.render('index',params);
}

export {homeController}