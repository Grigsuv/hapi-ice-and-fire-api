const {connect} = require('./db');
const Models = require('./models');

module.exports = {
    connect,
    ...Models
};