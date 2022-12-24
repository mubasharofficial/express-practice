var myLogger=(req,res,next)=>{
console.log("my middle ware");
next();
}

export { myLogger};