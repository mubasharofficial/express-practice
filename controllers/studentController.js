const studentController = (req,res)=>{
    const params = {id:"101",name:"Pakistan Lahore"}
    res.render('student',params);
}

export {studentController}