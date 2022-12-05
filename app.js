// old syntex
// const express = require("express");
// const student = require('./routes/student.js');
// const teacher = require('./routes/teacher.js');

import express from 'express';
const app = express();
import student from './routes/student.js';
import teacher from './routes/teacher.js';
// import {student,teacher} from './routes/index.js';

const port = process.env.PORT || '3000'
// Load Router Modules

app.use('/student',student);
app.use('/teacher',teacher);


app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})