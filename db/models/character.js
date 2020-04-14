const {Schema} = require('mongoose'),
    {autoIncrement} = rootRequire('db/plugins');

const CharacterSchema = new Schema({
    name: String,
    father: String,
    spouse: String,
    mother: String,
    gender: String,
    culture: String,
    born: String,
    died: String,
    books: {
        type: [{
            type: Number
        }],
    },
    povBooks: {
        type: [{
            type: Number
        }],
    },
    allegiances: {
        type: [{
            type: Number
        }],
    },
    titles: {
        type: [{
            type: String
        }],
    },
    aliases: {
        type: [{
            type: String
        }],
    },
    tvSeries: {
        type: [{
            type: String
        }],
    },
    playedBy: {
        type: [{
            type: String
        }],
    }
});

CharacterSchema.plugin(autoIncrement.plugin, {
    model: 'Character',
    startAt: 1
});

module.exports = CharacterSchema;