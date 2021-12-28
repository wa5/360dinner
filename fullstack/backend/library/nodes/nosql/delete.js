var mongodb = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/"


mongodb.connect(url, (err, db) => {
    if (err) throw err
    console.log("db connected")
    var dbo = db.db("murshi")



 var myobj={name:5}


dbo.collection("students").deleteOne(myobj,(err,res)=>{
if(err)throw err
console.log(res)
db.close()
    })





})