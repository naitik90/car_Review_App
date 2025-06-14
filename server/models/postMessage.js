import mongoose from 'mongoose';

// define the schema or data model of each object in the MongoDb database
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    message: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    modelNumber: {
        type: String,
    },
    topSpeed: {
        type: String,
    },
    mileage: {
        type: String,
    },
    color: {
        type: String,
       
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema); // assign the schema postSchema to the model PostMessage

// export the PostMessage model so that other modules can import it usig import statement and then use it's methods and properties
export default PostMessage;