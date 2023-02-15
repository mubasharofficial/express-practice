class StudentController{
    static regen_session = (req,res)=>{

        req.session.regenerate(()=>{
            console.log("session regenrated success...")
        })
        res.send(`genrated sussion id ${req.session.id}`);
    } 
    
    static get_session = (req,res)=>{
        console.log(req.session.id)
        console.log(req.session.cookie)
        console.log(req.session.cookie.maxAge)
        console.log(req.session.cookie.originalMaxAge)
        console.log(req.sessionID)
        res.send("Session Info...");
       
    }

    static delete_session = (req,res)=>
    {
        req.session.destroy(()=>{
            console.log("session have been destroy");
        });
        res.send("Session Have been deleted successufly") 
       
    }
    static counter_session = (req,res)=>{
        req.session.device='Mobile Phone'
        if(req.session.count){
            req.session.count++;
        }else{
            req.session.count=1;
        }
        res.send(`counter is: ${req.session.count}`);

    } 

    static get_counter=(req,res)=>{
        if(req.session.device){
            res.send(`Device: ${req.session.device}  Count:${req.session.count}`)
        }else{
            res.send("Count Not found Device And Count...")
        }
    }

}

export default StudentController;