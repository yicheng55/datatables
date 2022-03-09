var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
};

// var ZipCodesSchema = new mongoose.Schema({
//     _id: String,
//     city: String,
//     pop: Number,
//     state: String,
// }, schemaOptions);

var shelfrecSchema = new mongoose.Schema({
    _id: String,
    Locale: { type: String, required: true }, //架位
    EPC: { type: String, required: true }, //移動貨架
    Action: { type: String, required: true }, //1: 入櫃， 2: 出櫃
    systemTime: { type: Date, default: Date.now },
});

// var ZipCodes = mongoose.model('test002', ZipCodesSchema);
// var ZipCodes = mongoose.model('ZipCodes', ZipCodesSchema);
// var ZipCodes = mongoose.model('test001, ZipCodesSchema);
var ZipCodes = mongoose.model('shelfrecs', shelfrecSchema);
module.exports = ZipCodes;