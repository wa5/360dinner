require('../../settings/db.config')
    var {User}=require('../models')
function insertdata(name,email,password){



    var user1=new User({name:name,email:email,password:password})
    user1.save()


}
module.exports=insertdata