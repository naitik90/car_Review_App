import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js" // import the model which is the linked to the proper mongoDb schema
import { CreateCar } from "./Cars.js";
// this file stores the logic for all the callback functions that are called from the 
// routes in routes/posts.js

// this function is called by router.get('/'), so export it after defining it 
export const getPosts = async (req, res) => {  // make this callback func async because PostMessage.find() will take time to find all postmessages
    try {
        console.log(`Inside getPosts...... `);
        const postMessages = await PostMessage.find();
        //console.log(postMessages);
        console.log('Posts fetched successfully......');
        // postMessages that is the actual dataa is returned to actions/posts.js/getPosts , DO NOT ADD any custom message in json()
        res.status(200).json(postMessages)
    } catch(error) {
        res.status(404).json({ message: error });
    }    
}

// this function is called by router.post('/', createPost), so export it after defining it 
export const createPost = async (req, res) => {
    const {title, message, creator,image, name, modelNumber, topSpeed, mileage, color} = req.body;   
    const post = {
        title: title,
        message: message,
        creator: creator,
        image: image,
        name: name,
        modelNumber: modelNumber,
        topSpeed: topSpeed,
        mileage: mileage,
        color: color
    } 
    console.log('Request body:', post); 
    const newPost = new PostMessage(post); // create a new MongoDb object 'newPost' using the HTTP request body 'post' and schema postM essage

    try {
        console.log(`Inside createPost...... `);
        await newPost.save();
        console.log('Post created successfully......');
        await CreateCar(req, res);
        // newPost that is the actual dataa is returned to actions/posts.js/createPost , DO NOT ADD any custom message in json()
        // res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({ message: 'Error while uploading Post......'+ error });
    } 
}




export const getPostById = async (req, res) => {
    try {
        console.log(`Fetching post with ID: ${req.params.id}`);
        const post = await PostMessage.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        console.log('Post fetched successfully.');
        res.status(200).json(post);
    } catch (error) {
        console.error(`Error fetching post with ID: ${req.params.id}`, error);
        res.status(500).json({ message: 'Something went wrong', error });
    }
};


