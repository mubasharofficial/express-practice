import express from 'express';
import connectDB from './db/connectdb.js';
import {getSkippdDoc,
    getLimitedDoc,getAllDoc, getSingleDoc,
    getSingleDocSpecificField,
    getDocByFieldName,
    getDocByFieldNameSpefic_fields,
    getCountdDoc,
    getSortDoc
} from './models/Student.js';
const app = express();
const port = process.env.PORT || '3000';


//  Database Connection mongoDb

connectDB();

// fell All documents
// getAllDoc();
// getSingleDoc(); 
// getSingleDocSpecificField();
// getDocByFieldName();
// getDocByFieldNameSpefic_fields();
// getLimitedDoc();
// getSkippdDoc();
// getCountdDoc();
getSortDoc();
app.listen(port,()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})