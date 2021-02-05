const mongoose = require('mongoose');

const connection = mongoose.createConnection(
    'mongodb://localhost:27017/NoSqlPractice', { useNewUrlParser: true, useUnifiedTopology: true}
);
module.exports = {
    mongoose, connection
};