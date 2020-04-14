const mongoose = require('mongoose');

module.exports = {
    CharacterSchema: mongoose.model('Character', require('./character')),
    BookSchema: mongoose.model('Book', require('./books')),
    HouseSchema: mongoose.model('House', require('./house')),
};