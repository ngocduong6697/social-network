const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL');

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const connectDB = async () => {
    try {
        await mongoose.connect(db, connectionParams);
        console.log('MongoDB Connected...')
    } catch (err) {
        console.log(err.message);
        // Ext process with failure
        process.exit();
    }
}

module.exports = connectDB;