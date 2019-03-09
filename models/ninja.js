const mongoose = require('mongoose')
const Schema = mongoose.Schema

// GeoSchema for geolocation
const GeoSchema = new Schema({
    type : {
        type : String,
        default : "Point"
    },
    coordinates : {
        type : [Number],
        index : "2dsphere"
    }
})


// Create a schema and model
const NinjaSchema = new Schema({
    name : {
        type : String,
        required : [true, 'This is a required field.']
    },
    rank : {
        type : String
    },
    available : {
        type : Boolean,
        default : false
    },
    geometry : GeoSchema
})

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja