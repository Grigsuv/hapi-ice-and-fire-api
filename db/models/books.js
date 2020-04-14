const {Schema} = require('mongoose'),
    {autoIncrement} = rootRequire('db/plugins');

const BookSchema = new Schema({
    name: String,
    publisher: String,
    country: String,
    mediaType: String,
    released: Date,
    isbn: String,
    authors: {
        type: [{
            type: String
        }],
    },
    characters: {
        type: [{
            type: Number
        }],
    },
    povCharacters: {
        type: [{
            type: Number
        }],
    },
    numberOfPages: {
        type: Number,
    }
});

BookSchema.plugin(autoIncrement.plugin, {
    model: 'Book',
    startAt: 1
});

module.exports = BookSchema;