const mongoose = require('mongoose');

require('dotenv').config();
const uri = process.env.MONGODB_URL || "";

const connectDB = async() => {
    const connection = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(connection.connection.host);
}

module.exports = connectDB;