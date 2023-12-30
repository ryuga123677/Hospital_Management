const mongoose = require('mongoose');
const plm= require("passport-local-mongoose");
const doctorSchema = new mongoose.Schema({
    username: {type:String},
    
    password: {
      type: String,
    },
    email: {type:String},
    specialty: {type:String},
    hospitalname:{
      type:String
    },
    appointments:[{
      type: mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }],
    patienttreated:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Patient'
      }
    ],
    currentlytreating:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Patient'
    }],

  
  });
  doctorSchema.plugin(plm);
// Create models for Patient, Doctor, and Owner
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;