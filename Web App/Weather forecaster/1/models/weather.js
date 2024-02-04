const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const weatherSchema = new Schema({
  
});

const Weather =  mongoose.model('weather', weatherSchema);
module.exports = Weather;