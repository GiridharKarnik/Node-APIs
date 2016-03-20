var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var technologyJobSchema = new Schema({
    title: String,
    experience: Number,
    role: String,
    department: String
});

var TechnologyJob = mongoose.model('TechnologyJobModel', technologyJobSchema);
module.exports = TechnologyJob;