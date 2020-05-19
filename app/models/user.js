var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: { type: String, lowercase: true, required: true, unique: false },
	email: { type: String, lowercase: true, required: true, unique: false },
	mobile: { type: String, lowercase: true, required: true, unique: false },
	rating: { type: Number, required: true, unique: false },
	review: { type: String, lowercase: true, required: true, unique: false }
});

module.exports = mongoose.model('User', UserSchema);