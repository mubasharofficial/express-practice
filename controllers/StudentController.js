class StudentController{
    static set_cookies = (req,res)=>{
        res.send("Cookie Set...");
    } 
    
    static get_cookies = (req,res)=>{
        res.send("Cookie  Get...");
    }

    static delete_cookies = (req,res)=>{
        res.send("Cookie  Delete...");
    } 

}

export default StudentController;