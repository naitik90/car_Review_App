import mongoose, { model } from "mongoose";
import CarMessage from "../models/CarMessage.js" // import the model which is the linked to the proper mongoDb schema



// this function is called by router.post('/', createPost), so export it after defining it 
export const CreateCar = async (req, res) => {
    const {name, modelNumber, topSpeed, mileage, color} = req.body;
    const post = {
        name: name,
        modelNumber: modelNumber,
        topSpeed: topSpeed,
        mileage: mileage,
        color: color
    }    
    console.log('Request body:', post); 
    const newPost = new CarMessage(post); // create a new MongoDb object 'newPost' using the HTTP request body 'post' and schema postM essage

    try {
        console.log(`Inside createPost...... `);
        await newPost.save();
        console.log('Post created successfully......');
        // newPost that is the actual dataa is returned to actions/posts.js/createPost , DO NOT ADD any custom message in json()
        res.status(201).json(req.body);
    } catch(error) {
        res.status(409).json({ message: 'Error while uploading Post......'+ error });
    } 
}

