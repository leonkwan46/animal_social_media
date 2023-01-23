require('dotenv').config()

const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })
        
    } catch(err) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }
}

module.exports = connectDB