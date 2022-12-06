import exp from 'express';
const router = exp.Router();
router.get('/delete/:id',(req,res)=>{

    if (req.params.id==10)
    {
      return  res.send("Record successfully Detete")
    }
    else{
       return res.send("Record could not deleted Please Try Again")
    }
    console.table(req.params)
    return res.send("Do not happen any changes");
});
