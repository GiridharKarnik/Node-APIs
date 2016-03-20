var mongoose = requrie('mongoose');

var financeJobSchema = mongoose.Schema({
    Title: String,
    Experience: Number,
    Department: String
});