const mongooes = require('mongoose');
const Schema = mongooes.Schema;


//create geoschema
const GeoSchema = new Schema({
    type : {
        type : String,
        default: "Point"
    },
    coordinates : {
        type : [Number],
        index : "2dsphere"
 
    }

});

//create ninjas schema and models 

const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name Field is required'],
    },
    rank:{
        type:String,

    },
    availabel:{
        type:Boolean,
        default:false
    },
    // add in geo location  data
    //geometry:GeoSchema
});


// create ningas model

const Ninjas = mongooes.model('ninja',NinjaSchema);

//export ningas models
module.exports =  Ninjas;