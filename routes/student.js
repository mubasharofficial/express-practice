// const express = require('express');  old method
import express from 'express'; // ES6 syntex

const router = express.Router();



router.get('/all',(req,res)=>{
    res.send("all Students");
});
router.post('/create',(req,res)=>{
    res.send("New Student Created");
});
router.put('/update',(req,res)=>{
    res.send("Student updated");
});
router.delete('/delete',(req,res)=>{
    res.send("Student Delete");
});

// module.exports = router  old method
export default router;  // ES6 Syntex