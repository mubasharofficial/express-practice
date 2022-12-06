const all_student=(req,res)=>{
    console.log("Welcome to all user");
    res.send("all request sending to all");
  };
 const delete_student = (req,res)=>{
    if (req.params.id==10)
    {
      return  res.send("Record successfully Detete")
    }
    else{
       return res.send("Record could not deleted Please Try Again")
    }
};

export  {all_student,delete_student}
// module.exports = {all_student,delete_student}