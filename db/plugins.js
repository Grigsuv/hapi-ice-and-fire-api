const mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection(process.env.DB_URL);

autoIncrement.initialize(connection);

module.exports = {
    autoIncrement
}