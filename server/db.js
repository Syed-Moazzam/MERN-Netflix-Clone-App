const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected To MongoDB Successfully!");
  }).catch((error) => {
    console.log(error.message);
  })
}

module.exports = connectToMongo;