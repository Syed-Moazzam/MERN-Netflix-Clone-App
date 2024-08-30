import mongoose from 'mongoose';

const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Connected To MongoDB Successfully!');
    }).catch((error) => {
        console.log('Error Connecting to MongoDB: ', error);
    })
}

export default connectToMongo;