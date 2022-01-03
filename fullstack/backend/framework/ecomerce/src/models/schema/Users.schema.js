
require('../../../settings/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose


var userStructure=new Schema({
    name:String,
    email:String,
    password:String
})

module.exports=mongoose.model('users',userStructure)

// class Humans{
//     constructor({eyes,nose,ers}){
//         this.eyes=eyes
//         this.nose=nose
//         this.ers=ers
//     }
// }

// var pratik=new Humans({eyes:2,nose:1,ers:2})