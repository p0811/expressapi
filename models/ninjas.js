const mongooes = require('mongoose');
const Schema = mongooes.Schema;


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
    }
    // add in geo location  data
});


// create ningas model

const Ninjas = mongooes.model('ninja',NinjaSchema);

//export ningas models
module.exports =  Ninjas;