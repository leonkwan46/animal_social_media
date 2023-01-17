const mongoose = require('mongoose')


const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGO_URL)
    } catch (err) {
        console.log(err);
    }
}

module.exports = {connectDB}