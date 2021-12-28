var mongodb = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/"


mongodb.connect(url, (err, db) => {
    if (err) throw err
    console.log("db connected")
    var dbo = db.db("murshi")


    var myobj = {movie: 'venktesh'}
    var newvalues={$set:{name:'1234'}}


    dbo.collection("students").updateOne(myobj,newvalues,(err,res)=>{
if(err)throw err
console.log("value updated")
db.close()
    })
})