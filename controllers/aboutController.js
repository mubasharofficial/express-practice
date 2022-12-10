import {join} from 'path';
const aboutController = (req,res)=>{
    res.sendFile(join(process.cwd(),'views','about.html'));
    // res.send('About Page');
}

export {aboutController};