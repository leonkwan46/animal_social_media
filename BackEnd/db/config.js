require('dotenv').config()


const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL)
        
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error);
        //close process when failure
        process.exit(1)
    }
}

module.exports = connectDB