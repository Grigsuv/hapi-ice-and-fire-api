const {Schema} = require('mongoose'),
    {autoIncrement} = rootRequire('db/plugins');
const HouseSchema = new Schema({
    name: String,
    region: String,
    coatOfArms: String,
    words: String,
    currentLord: Number,
    heir: Number,
    overlord: Number,
    founded: String,
    founder: String,
    diedOut: String,
    titles: [{type: String}],
    seats: [{type: String}],
    ancestralWeapons: [{type: String}],
    cadetBranches: [{type: Number}],
    swornMembers: [{type: Number}],
});

HouseSchema.plugin(autoIncrement.plugin, {
    model: 'House',
    field: 'bookId',
    startAt: 1
});

module.exports = HouseSchema;