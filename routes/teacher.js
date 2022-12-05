// const express = require('express');  old method
import express from 'express'; // ES6 syntex

const router = express.Router();

router.get('/all',(req,res)=>{
    res.send("all teachers");
});
router.post('/create',(req,res)=>{
    res.send("New teacher Created");
});
router.put('/update',(req,res)=>{
    res.send("teacher updated");
});
router.put('/delete',(req,res)=>{
    res.send("teacher Delete");
});

// module.exports = router  old method
export default router;  // ES6 Syntex