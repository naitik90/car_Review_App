import mongoose from 'mongoose';

// define the schema or data model of each object in the MongoDb database
const CarSchema = mongoose.Schema({
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

const CarMessage = mongoose.model('CarMessage', CarSchema); // assign the schema postSchema to the model PostMessage

// export the PostMessage model so that other modules can import it usig import statement and then use it's methods and properties
export default CarMessage;