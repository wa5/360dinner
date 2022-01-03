
require('../../../settings/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose


var studentStructure=new Schema({
    name:String,
    age:Number,
    chocalate:String
})

module.exports=mongoose.model('students1',studentStructure)

// class Humans{
//     constructor({eyes,nose,ers}){
//         this.eyes=eyes
//         this.nose=nose
//         this.ers=ers
//     }
// }

// var pratik=new Humans({eyes:2,nose:1,ers:2})