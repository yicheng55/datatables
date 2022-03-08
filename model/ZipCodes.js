
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

var ZipCodesSchema = new mongoose.Schema({
  _id: String,
  city:  String,
  pop:Number,
  state:String,
}, schemaOptions);

// var ZipCodes = mongoose.model('test002', ZipCodesSchema);
// var ZipCodes = mongoose.model('ZipCodes', ZipCodesSchema);
var ZipCodes = mongoose.model('test001', ZipCodesSchema);
module.exports = ZipCodes;
