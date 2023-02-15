class StudentController{
    static set_cookies = (req,res)=>{
        // res.cookie("username","admin");
        res.cookie("cart",5);
        // res.cookie("testCookies","techframe",{maxAge:10000}) // these cookies expire after 10 seconds.
        res.send("Cookie Set...");
    } 
    
    static get_cookies = (req,res)=>{
        console.log("fetch cookies",req.cookies); // this will get all cookies
        // console.log(req.cookie.cart); // get spefice cookies like 
        // console.log(req.cookie.username) // 
        // console.log(req.cookie.testCookies) /** git spefic cookies */
        res.send("Cookie  Get...");
    }

    static delete_cookies = (req,res)=>{
        res.clearCookie("cart");
        res.send("Cookie  Delete...");
    } 

}

export default StudentController;