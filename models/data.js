const mongoose = require('mongoose')

var courseSchema = new mongoose.Schema({          
    course:{
        type:String,
        required:true
    },
    lecturer:{
        type:String,
        required:true
    },
    time:{
        type:String,
        
    },    
});
exports.Course = mongoose.model('data' , courseSchema)