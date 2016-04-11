var mongoose = require('mongoose');

// Define our user schema
var EventSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },

});

// Export the Mongoose model
module.exports = mongoose.model('Event',EventSchema);

