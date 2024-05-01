const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://razauwais21:mZUixSBANCFlw4kC@cluster0.awyyl7c.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = {connectDB};