//this file will be used to receive HTTP requests for all REST API end-points with suffic as /posts defined in the index.js
import express from 'express';

import { getPosts, createPost, getPostById, } from '../controllers/posts.js';


const router = express.Router(); // use the Router method within the express object to create a new router instance

console.log(`Inside routes/posts.js...... `);

//here the (func_name) specifies the callback function for every aync call from REACT App, the func_name is defined in /controllers/posts.js
router.get('/getData', getPosts);
router.get('/getPost/:id', getPostById);
router.post('/create', createPost);

// export the App function from the App.JS module so that other modules can import it usig import statement
export default router;