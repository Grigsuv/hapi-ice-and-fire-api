const mongoose = require('mongoose');
let Bluebird = require('bluebird');
Bluebird.config({
  warnings: false,
});

mongoose.Promise = Bluebird;
module.exports.connect = () => {
  return mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true
  })
};


module.exports.createConnection = mongoose.createConnection(process.env.DB_URL)